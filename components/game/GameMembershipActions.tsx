import { Save } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GAME_ROLE } from 'constants/contracts';
import { DataContext } from 'contexts/data';
import useDao from 'hooks/useDao';
import useError from 'hooks/useError';
import useToast from 'hooks/useToast';
import { useContext, useEffect, useState } from 'react';

export default function GameMembershipActions({ dao, sx }: any) {
  const { accountSoul } = useContext(DataContext);
  const { handleError } = useError();
  const { showToastSuccess } = useToast();
  const { leave, applyToJoin, isSoulHasRole } = useDao();
  const [isSoulMember, setIsSoulMember] = useState(false);
  const [isSoulSentApplication, setIsSoulSentApplication] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  async function submit() {
    try {
      setIsProcessing(true);
      if (isSoulMember) {
        await leave(dao.id);
      } else {
        await applyToJoin(dao.id, accountSoul.id, '');
      }
      showToastSuccess('Success! Data will be updated soon');
      setIsProcessed(true);
    } catch (error: any) {
      handleError(error, true);
    } finally {
      setIsProcessing(false);
    }
  }

  useEffect(() => {
    setIsSoulMember(false);
    setIsSoulSentApplication(false);
    if (accountSoul && dao) {
      setIsSoulMember(isSoulHasRole(dao, accountSoul.id, GAME_ROLE.member.id));
      const nominatedSouls = dao.nominations.map(
        (nomination: any) => nomination.nominated.id,
      );
      setIsSoulSentApplication(nominatedSouls.includes(accountSoul.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountSoul, dao]);

  return (
    <Box sx={{ ...sx }}>
      {!accountSoul || isProcessed ? (
        <></>
      ) : isProcessing ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<Save />}
          variant="outlined"
        >
          Processing
        </LoadingButton>
      ) : isSoulMember ? (
        <Button variant="outlined" onClick={() => submit()}>
          Leave
        </Button>
      ) : isSoulSentApplication ? (
        <Button variant="outlined" disabled>
          Application is pending
        </Button>
      ) : (
        <Button variant="outlined" onClick={() => submit()}>
          Apply to Join
        </Button>
      )}
    </Box>
  );
}
