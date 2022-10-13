import { SubjectManager } from '@/models';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

interface Props {
	children: React.ReactNode;
}

export const modalOpenSubject$ = new SubjectManager<boolean>();
export const modalCloseSubject$ = new SubjectManager<boolean>();

export const CustomModal = ({ children }: Props) => {

	const [open, setOpen] = useState(false);
	let openSubject$ = new Subscription();
	let closeSubject$ = new Subscription();

	useEffect(() => {
		openSubject$ = modalOpenSubject$.getSubject.subscribe(() => handleClickOpen());
		closeSubject$ = modalCloseSubject$.getSubject.subscribe(() => handleClose());
		return () => {
			openSubject$.unsubscribe();
			closeSubject$.unsubscribe();
		};
	}, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleExit = () => {
		modalCloseSubject$.setSubject = false;
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={() => handleExit()}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth
			>
				{children}
			</Dialog>
		</div>
	);
};

export default CustomModal;