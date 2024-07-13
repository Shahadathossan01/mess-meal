import { Button, IconButton, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import ItemsModal from '../FromDialog/ItemsModal/ItemsModal';
import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
const GroceryItemTableRow = ({item,updateGrocery,id}) => {
    const {deleteGrocery}=useStoreActions(action=>action.groceryCost)
    const [open, setOpen] =useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
            <TableRow key={item.id}>
                        <TableCell >
                            {item.attributes.grocery}
                        </TableCell>
                        <TableCell >
                            {item.attributes.amount}
                        </TableCell>
                        <TableCell >
                            {format(item.attributes.dateTime,'MM/dd/yyyy')+' '+format(item.attributes.dateTime,'HH:mm aa')}
                        </TableCell>
                        <TableCell >
                            <Button onClick={handleClickOpen}>Edit
                            </Button>
                        </TableCell>
                        <TableCell >
                        <IconButton onClick={()=>{deleteGrocery(id)}}
                        aria-label="delete" size="large">
                            <DeleteIcon style={{color:'red'}}/>
                        </IconButton>
                        </TableCell>
            </TableRow>
            <ItemsModal id={id} handleData={updateGrocery} handleClose={handleClose} open={open}  add={false}></ItemsModal>
        </>
            );
};

export default GroceryItemTableRow;