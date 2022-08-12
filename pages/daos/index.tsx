import { useContext } from 'react';
import { Button } from '@mui/material';
import { DialogContext } from 'contexts/dialog';
import { DataContext } from 'contexts/data';
import { getPageTitle } from '../../utils';
import DaoManageDialog from 'components/dao/DaoManageDialog';
import Layout from 'components/layout/Layout';
import DAOListGQ from 'components/soul/DAOListGQ';
import { hexStringToJson } from 'utils/converters';
import { resolveLink } from 'utils/metadata';

const CONF = {
  PAGE_TITLE: 'Teams',
  TITLE: 'Teams',
  SUBTITLE: `Mentor DAOs consist of a mentor and mentees that work on bounties
  together, as a team.`,
};

// Item Processing Function
const getCardContent = (item: any) => {
  let metadata = hexStringToJson(item.uriData);
  let ret = {
    id: item.id,
    imgSrc: resolveLink(metadata.image),
    label: metadata?.description,
    title: metadata?.name,
    metadata: metadata,
    link: `/daos/${item.owner}`,
  };
  return ret;
};

/**
 * Page for a list of mDAO Games
 */
export default function DaosPage({}: any) {
  const { accountSoul } = useContext(DataContext);
  const { showDialog, closeDialog } = useContext(DialogContext);
  // const { handleError } = useError();

  const renderActions = accountSoul && (
    <Button
      onClick={() => showDialog?.(<DaoManageDialog onClose={closeDialog} />)}
      variant="outlined"
    >
      Create DAOs
    </Button>
  );

  const daosListProps = {
    variables: {
      type: 'GAME',
      role: 'MDAO',
    },
    getCardContent,
    renderActions,
    subtitle: CONF.SUBTITLE,
    title: CONF.TITLE,
  };

  return (
    <Layout title={getPageTitle(CONF.PAGE_TITLE)}>
      <DAOListGQ {...daosListProps} />
    </Layout>
  );
}
