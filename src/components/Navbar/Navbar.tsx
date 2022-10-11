import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	return <div>
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					APP
				</Typography>
			</Toolbar>
		</AppBar>
	</div>;
};

export default Navbar;
