import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';

import useToast from 'hooks/useToast';
import useIpfs from 'hooks/useIpfs';
import useError from 'hooks/useError';
import ImageInput from 'components/form/widgets/ImageInput';
import DialogForm from './DialogForm';

/**
 * A dialog for creating or editing entity.
 */
export default function ManageDialog({
  title,
  actionLabel,
  formAction,
  formState,
  isClose,
  onClose,
  schema,
  uiSchema,
  widgets = {},
}: any) {
  const { showToastSuccess } = useToast();
  const { uploadJsonToIPFS } = useIpfs();
  const { handleError } = useError();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(!isClose);
  const [formData, setFormData] = useState(formState);

  const defaultWidgets = {
    ImageInput,
    ...widgets,
  };

  async function close() {
    setFormData({});
    setIsLoading(false);
    setIsOpen(false);
    onClose();
  }

  async function onSubmit({ formData }: any) {
    try {
      setFormData(formData);
      setIsLoading(true);
      const { url: metadataUrl } = await uploadJsonToIPFS(formData);

      await formAction({ formData, metadataUrl });
      showToastSuccess('Success! Data will be updated soon');
      close();
    } catch (error: any) {
      handleError(error, true);
      setIsLoading(false);
    }
  }

  const formProps = {
    schema,
    formData,
    ...((uiSchema && { uiSchema }) || {}),
    widgets: defaultWidgets,
    onSubmit,
    disabled: isLoading,
  };

  const dialogProps = {
    title,
    actionLabel,
    isOpen,
    isLoading,
    formProps,
    onClose,
  };

  return <DialogForm {...dialogProps} />;
}
