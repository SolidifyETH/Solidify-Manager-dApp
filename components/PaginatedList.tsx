import { useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material';
import ListComponent from './ListComponent';

type TPaginatedList = {
  baseRoute: string;
  data: any;
  loadData: any;
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
export default function PaginatedList({
  baseRoute,
  data,
  loadData,
  subtitle,
  title,
  renderActions,
  getCardContent,
}: TPaginatedList) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCount, setCurrentPageCount] = useState(1); // TODO: update pagination

  function loadWithPagination(page: number) {
    loadData(page);
    data && setCurrentPage(page);
  }

  const listProps = {
    baseRoute,
    subtitle,
    title,
    renderActions,
    getCardContent,
    loading: false,
    items: data,
    currentPage,
    pageChanged: loadWithPagination,
    first,
  };

  return <ListComponent {...listProps} />;
}
