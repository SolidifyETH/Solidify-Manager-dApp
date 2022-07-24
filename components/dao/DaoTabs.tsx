import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import GameSouls from 'components/game/GameSouls';
import { useState } from 'react';
import DaoApplications from './DaoApplications';

/**
 * A component with DAO tabs.
 */
export default function DaoTabs({ dao, sx }: any) {
  const [tabValue, setTabValue] = useState('1');

  function handleChange(_: any, newTabValue: any) {
    setTabValue(newTabValue);
  }
  if (dao) {
    return (
      <Box sx={{ width: '100%', ...sx }}>
        <TabContext value={tabValue}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              mb: 1,
              maxWidth: 'calc(100vw - 32px)',
            }}
          >
            <Tab label="Members" value="1" />
            <Tab label="Applications" value="2" />
          </TabList>
          <TabPanel value="1" sx={{ px: 0 }}>
            <GameSouls game={dao} />
          </TabPanel>
          <TabPanel value="2" sx={{ px: 0 }}>
            <DaoApplications dao={dao} />
          </TabPanel>
        </TabContext>
      </Box>
    );
  }

  return <></>;
}