import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { PrimaryButton } from '../PrimaryButton';
import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';

export function DialogMui({open, handleClose, text, submit, title, children}){
  //
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: {submit},
        }}
        
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <PrimaryButton text={text}></PrimaryButton>
        </DialogActions>
      </Dialog>
    )
}