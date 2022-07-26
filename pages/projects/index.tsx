import { useContext } from 'react';
import { Button } from '@mui/material';
import { DialogContext, IDialogParams } from 'contexts/dialog';
import { DataContext } from 'contexts/data';
import { getPageTitle } from '../../utils';
import ProjectManageDialog from 'components/project/ProjectManageDialog';
import Layout from 'components/layout/Layout';
import SoulListGQ from 'components/soul/DAOListGQ';
import { gameCardContent } from 'utils/cardContents';
import { GAME_NAME } from 'constants/contracts';
import Link from 'components/utils/Link';

const CONF = {
  PAGE_TITLE: 'Projects',
  TITLE: 'Projects',
  SUBTITLE: (
    <>
      Projects consume work to produce a product. Cordinating effort via{' '}
      <Link href="/tasks/" sx={{ color: '#f8f8f8' }}>
        {GAME_NAME.tasks}
      </Link>
      .
    </>
  ),
};

/**
 * Page for a list of projects
 */
export default function ProjectsPage({}: any) {
  const { accountSoul } = useContext(DataContext);
  const { showDialog, closeDialog } = useContext(DialogContext);
  const renderActions = accountSoul && (
    <Button
      onClick={() =>
        showDialog?.(<ProjectManageDialog onClose={closeDialog} />)
      }
      variant="outlined"
    >
      Create Project
    </Button>
  );

  const listProps = {
    variables: {
      type: 'GAME',
      role: 'PROJECT',
    },
    getCardContent: gameCardContent,
    renderActions,
    subtitle: CONF.SUBTITLE,
    title: CONF.TITLE,
  };

  return (
    <Layout title={getPageTitle(CONF.PAGE_TITLE)}>
      <SoulListGQ {...listProps} />
    </Layout>
  );
}
