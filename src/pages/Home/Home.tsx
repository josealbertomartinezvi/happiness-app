import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

	const pageSize: number = 5;
	const columns = [
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (paramns: GridRenderCellParams) => <>{paramns.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (paramns: GridRenderCellParams) => <>{paramns.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (paramns: GridRenderCellParams) => <>{paramns.value}</>
		}
	];

	return (
		<DataGrid
			disableColumnSelector
			columns={columns}
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rows={People}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default Home;
