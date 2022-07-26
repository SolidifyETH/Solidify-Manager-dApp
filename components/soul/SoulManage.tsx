import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button } from '@mui/material';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import ImageInput from 'components/form/widget/ImageInput';
import SoulAttributesInput from 'components/form/widget/soul/SoulAttributesInput';
import { PROFILE_TRAIT_TYPE } from 'constants/metadata';
import useError from 'hooks/useError';
import useIpfs from 'hooks/useIpfs';
import useSoul from 'hooks/useSoul';
import useToast from 'hooks/useToast';
import { JSONSchema7 } from 'json-schema';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { soulToFirstLastNameString } from 'utils/converters';
import { getAttribute } from 'helpers/metadata';

/**
 * Component: create or edit Soul.
 */
export default function SoulManage({ soul }: any) {
  const STATUS = {
    isAvailable: 'isAvailable',
    isUploadingToIpfs: 'isUploadingToIpfs',
    isUsingContract: 'isUsingContract',
  };

  const router = useRouter();
  const { showToastSuccess } = useToast();
  const { uploadJsonToIPFS } = useIpfs();
  const { handleError } = useError();
  const { createSoul, editSoul } = useSoul();
  const [status, setStatus] = useState(STATUS.isAvailable);
  const [formData, setFormData] = useState(soul?.uriData || {});

  const schema: JSONSchema7 = {
    type: 'object',
    properties: {
      image: {
        type: 'string',
        title: '',
      },
      attributes: {
        type: 'array',
        title: '',
        items: [{}],
      },
    },
  };

  const uiSchema = {
    image: {
      'ui:widget': 'ImageInput',
    },
    attributes: {
      'ui:widget': 'SoulAttributesInput',
    },
  };

  const widgets = {
    ImageInput: ImageInput,
    SoulAttributesInput: SoulAttributesInput,
  };

  async function submit({ formData }: any) {
    try {
      // Update form data
      setFormData(formData);
      // Upload json with form data to IPFS
      setStatus(STATUS.isUploadingToIpfs);

      let metadata = formData;
      let uriFirstName = getAttribute(
        metadata?.attributes,
        PROFILE_TRAIT_TYPE.firstName,
      );
      let uriLastName = getAttribute(
        metadata?.attributes,
        PROFILE_TRAIT_TYPE.lastName,
      );
      metadata.name = soulToFirstLastNameString({ uriFirstName, uriLastName });
      metadata.description = getAttribute(metadata?.attributes, 'Description');
      const { url: metadataUrl } = await uploadJsonToIPFS(metadata);
      // eslint-disable-next-line prettier/prettier
      console.log("Saving Soul's Metadata", { formData, metadata, metadataUrl });
      // Use contract
      setStatus(STATUS.isUsingContract);
      if (soul) {
        await editSoul(soul.id, metadataUrl);
        showToastSuccess(
          'Update has been sent to chain and will be processed shortly',
        );
        router.push('/souls/' + soul.id);
      } else {
        await createSoul(metadataUrl);
        showToastSuccess('Your new soul is on its way');
        router.push('/');
      }
    } catch (error: any) {
      handleError(error, true);
      setStatus(STATUS.isAvailable);
    }
  }

  return (
    <Box>
      {/* <Typography variant="h5" gutterBottom>
        {soul ? 'Edit Soul' : 'Create Soul'}
      </Typography> */}
      {/* <Divider /> */}
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onSubmit={submit}
        widgets={widgets}
        disabled={status !== STATUS.isAvailable ? true : false}
      >
        {status === STATUS.isAvailable && (
          <Button variant="contained" type="submit">
            {soul ? 'Save' : 'Create'}
          </Button>
        )}
        {status === STATUS.isUploadingToIpfs && (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<Save />}
            variant="outlined"
          >
            Uploading to IPFS
          </LoadingButton>
        )}
        {status === STATUS.isUsingContract && (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<Save />}
            variant="outlined"
          >
            {soul ? 'Updating' : 'Creating'}
          </LoadingButton>
        )}
      </Form>
    </Box>
  );
}
