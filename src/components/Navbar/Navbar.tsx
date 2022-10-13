import { AppStore } from '@/redux/store';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { CustomModal } from '../CustomModal';
import { modalOpenSubject$ } from '../CustomModal/CustomModal';
import { FavoriteTable } from './FavoriteTable';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	useSelector((store: AppStore) => store.favorites);

	const handleClick = () => {
		modalOpenSubject$.setSubject = true;
	};

	return ( 
		<>
			<CustomModal>
				<FavoriteTable/>
			</CustomModal>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						HAPPINESS APP
					</Typography>
					<Button 
						variant="contained"
						onClick={handleClick}
					>
						Open Favorites
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
