import { useContext, useState } from 'react';
// import { BigNumber, ethers } from 'ethers';
import { Web3Context } from 'contexts/Web3Context';
import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { MuiForm5 as Form } from '@rjsf/material-ui';
import useError from 'hooks/useError';
// import useTask from 'hooks/useTask';
import useToast from 'hooks/useToast';
import { JSONSchema7 } from 'json-schema';
import AddressHash from 'components/web3/AddressHash';

interface DialogParams {
  onClose: Function;
  isClose?: boolean;
}

interface FundParams extends DialogParams {
  address: string;
}

/**
 * A dialog for apply for a task.
 */
export default function FundDialog({
  address,
  isClose,
  onClose,
}: FundParams): JSX.Element {
  const { showToastSuccess } = useToast();
  const { handleError } = useError();
  // const { applyForTaskAsDao } = useTask();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(!isClose);
  const [formData, setFormData] = useState({});
  const { provider } = useContext(Web3Context);

  const schema: JSONSchema7 = {
    type: 'object',
    required: ['amount'],
    properties: {
      amount: {
        type: 'string',
        title: 'Amount',
      },
    },
  };

  const close = async () => {
    setFormData({});
    setIsLoading(false);
    setIsOpen(false);
    onClose && onClose();
  };

  const submit = async ({ formData }: any) => {
    try {
      setFormData(formData);
      setIsLoading(true);
      let tx = {
        to: address,
        value: (formData.amount * 10 ** 18).toString(), //Works
        // value: BigNumber.from(formData.amount), //Fails
        // value: BigNumber.from(formData.amount).toHexString(), //Fails
        // value: ethers.utils.formatEther(formData.amount).toString(), //Wrong amount
        //TODO: Should try to use ethers.utils to format the amount
      };
      let receipt = await provider.getSigner().sendTransaction(tx);
      showToastSuccess('Success! Funds are on their way');
      close();
    } catch (error: any) {
      handleError(error, true);
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      // eslint-disable-next-line prettier/prettier
      onClose={isLoading ? () => {} : close}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle sx={{ pb: 0 }}>
        Fund <AddressHash address={address} />
      </DialogTitle>
      <DialogContent>
        <Form
          schema={schema}
          formData={formData}
          onSubmit={submit}
          disabled={isLoading}
        >
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            {isLoading ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<Save />}
                variant="outlined"
              >
                Processing
              </LoadingButton>
            ) : (
              <>
                <Button variant="contained" type="submit">
                  Send
                </Button>
                <Button
                  variant="outlined"
                  onClick={(e) => onClose && onClose(e)}
                >
                  Cancel
                </Button>
              </>
            )}
          </Stack>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
