import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { APP_CONFIGS } from 'constants';
import ListComponent from './PaginatedList/ListComponent';

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
  const pageSize = APP_CONFIGS.PAGE_SIZE;
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentPageCount, setCurrentPageCount] = useState(2); //Unknown End
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(pageSize);
  const [skip, setSkip] = useState(0);

  //TODO: Use Order
  const [orderBy, setOrderBy] = useState({ createdAt: 'desc' });

  //TODO: Maybe handle the 'loading' state
  const { data, loading, error } = useQuery(query, {
    variables: { ...variables, first, skip },
  });

  useEffect(() => {
    if (error) console.error('Soul query failed', { data, error });
    else console.log('Soul query ', data?.souls);
    setItems(data?.souls);
  }, [data, error]);

  function pageChanged(page: number) {
    // console.log('Set Page', page);
    setSkip(page == 1 ? 0 : (page - 1) * pageSize);
    data && setCurrentPage(page);
  }

  const listProps = {
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
  };

  return <ListComponent {...listProps} />;
}
