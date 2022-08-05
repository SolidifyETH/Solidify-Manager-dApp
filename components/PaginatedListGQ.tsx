import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material';
import DashboardCardList from './DashboardCardList';

type TPaginatedListGQ = {
  query: any;
  variables?: any;
  baseRoute: string;
  subtitle: string;
  title: string;
  getCardContent: {};
  renderActions?: JSX.Element;
};

const wrapperStyle = {
  alignItems: { md: 'center' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: { md: 'space-between' },
  mt: 3,
};

/**
 * Component for a paginated list
 */
export default function PaginatedListGQ({
  query,
  variables,
  baseRoute,
  subtitle,
  title,
  renderActions,
  getCardContent,
}: TPaginatedListGQ) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentPageCount, setCurrentPageCount] = useState(2); //Unknown End
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(10);
  const [skip, setSkip] = useState(0);

  //TODO: Use Order
  const [orderBy, setOrderBy] = useState({ createdAt: 'desc' });

  //TODO: Maybe handle the 'loading' state
  const { data, loading, error } = useQuery(query, {
    variables: { ...variables, first, skip },
  });

  useEffect(() => {
    if (error) console.error('Soul query failed', { data, error });
    else console.error('Soul query ', { data });
    setItems(data?.souls);

    console.log('Souls:', data?.souls);
  }, [data, error]);

  function pageChanged(page: number) {
    // console.log('Set Page', page);
    setSkip(page == 1 ? 0 : (page - 1) * first);
    data && setCurrentPage(page);
  }

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
          // count={currentPageCount}
          count={items?.length < first ? currentPage : currentPage + 1}
          onChange={(_, page) => pageChanged(page)}
          page={currentPage}
          sx={{ mt: { xs: 2, md: 0 } }}
        />
      </Box>
    </>
  );
}