import React, { useEffect, useState } from 'react';
import { find } from './actions';
import './home.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'usehooks-ts';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PAGE_SIZE = 10;
const FILTER_DEBOUNCE = 500;

export const Home = () => {
  const dispatch = useDispatch();

  const [nameFilter, setNameFilter] = useState<string>('');
  const nameFilterDebounced = useDebounce<string>(nameFilter, FILTER_DEBOUNCE);

  const [page, setPage] = useState(0);
  const history = useHistory();

  useEffect(() => {
    dispatch(
      find({
        start: page * PAGE_SIZE,
        count: PAGE_SIZE,
        filter: nameFilterDebounced,
      })
    );
  }, [page, nameFilterDebounced, dispatch]);

  const { loading, pokemons, total } = useSelector((state: any) => state.home);

  const { t } = useTranslation('common');

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('name'), width: 200, sortable: true },
    { field: 'url', headerName: t('url'), width: 300 },
  ];

  return (
    <div className="home">
      <input
        className="home__search"
        value={nameFilter}
        onChange={(e) => {
          setNameFilter(e.target.value);
        }}
        placeholder={t('search')}
      />
      <div className="home__list">
        <DataGrid
          page={page}
          rows={pokemons.map((pokemon : any, id : number) => ({
            id,
            ...pokemon,
          }))}
          columns={columns}
          rowCount={total}
          pageSize={PAGE_SIZE}
          onPageChange={(newPage) => {
            setPage(newPage);
          }}
          pagination
          loading={loading}
          onRowClick={(row) => {
            history.push(`/pokemon/${row.row.name}`);
          }}
        />
      </div>
    </div>
  );
};
