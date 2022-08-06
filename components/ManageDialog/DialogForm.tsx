/**
 * A dialog form component.
 */
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

export default function DialogForm({
  title,
  actionLabel,
  isOpen,
  isLoading,
  formProps,
  onClose,
}: any) {
  const renderActionButtons = (
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
            {actionLabel}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </>
      )}
    </Stack>
  );

  return (
    <Dialog
      open={isOpen}
      onClose={isLoading ? () => {} : close}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle sx={{ pb: 0 }}>{title}</DialogTitle>
      <DialogContent>
        <Form {...formProps}>{renderActionButtons}</Form>
      </DialogContent>
    </Dialog>
  );
}
