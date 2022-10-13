import { People } from '@/data';
import { Person } from '@/models';
import { addFavorite, addPeople } from '@/redux/states';
import store from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const pageSize: number = 5;
	const dispatch = useDispatch();

	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
		dispatch(addFavorite(filteredPeople));
		setSelectedPeople(filteredPeople);
	};

	const columns = [
		{
			field: 'actions',
			headerName: '',
			type: 'actions',
			sortable: false,
			width: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox 
					size='small' 
					checked={ findPerson(params.row) }
					onChange={ () => handleChange(params.row) }
				/>
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
		}
	];
	
	useEffect(() => {
	  dispatch(addPeople(People))
	}, []);

	return (
		<DataGrid
			disableColumnSelector
			columns={columns}
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rows={store.getState().people}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: Person) => row.id}
		/>
	);
};

export default Home;