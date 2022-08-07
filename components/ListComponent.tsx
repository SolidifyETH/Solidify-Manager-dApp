/**
 * Component for a paginated list
 */
import { Box, Pagination, Typography } from '@mui/material';
import DashboardCardList from '../DashboardCardList';

const wrapperStyle = {
  alignItems: { md: 'center' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: { md: 'space-between' },
  mt: 3,
};

export default function ListComponent({
  baseRoute,
  subtitle,
  title,
  renderActions,
  getCardContent,
  loading,
  items,
  currentPage,
  pageChanged,
  first,
}: any) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
        {!!renderActions && renderActions}
      </Box>
      <DashboardCardList
        loading={loading}
        baseRoute={baseRoute}
        dataAccessor={getCardContent}
        data={items}
      />
      <Box sx={wrapperStyle}>
        <Pagination
          color="primary"
          count={items?.length < first ? currentPage : currentPage + 1}
          onChange={(_, page) => pageChanged(page)}
          page={currentPage}
          sx={{ mt: { xs: 2, md: 0 } }}
        />
      </Box>
    </>
  );
}
