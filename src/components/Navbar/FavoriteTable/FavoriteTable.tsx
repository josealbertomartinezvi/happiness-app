import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {

	const pageSize: number = 5;
	const dispatch = useDispatch();
	const stateFavorites = useSelector((store: AppStore) => store.favorites);

	const handleClick = (person: Person) => dispatch(removeFavorite(person));

	const columns = [
		{
			field: 'actions',
			headerName: '',
			type: 'actions',
			sortable: false,
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
            		<Delete />
          		</IconButton>
			}</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{ params.value }</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{ params.value }</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{ params.value }</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of happiness',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{ params.value }</>
		}
	];

	return (
		<DataGrid
			disableColumnSelector
			columns={columns}
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rows={stateFavorites}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: Person) => row.id}
		/>
	);

};

export default FavoriteTable;

