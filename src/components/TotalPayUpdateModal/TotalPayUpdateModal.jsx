import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useStoreActions } from 'easy-peasy';
const initValue=0
const TotalPayUpdateModal=({handleClose,open,id})=>{
    console.log(id)
    const {updateUserTotaPay}=useStoreActions(action=>action.user)
    const {register,handleSubmit}=useForm({initValue})
    const onSubmit=(data)=>{
        updateUserTotaPay({data,id})
        handleClose()
    }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Update Total Pay</DialogTitle>
        <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="totalPay">Total Pay: </label>
                <input {...register('totalPay',{required:true})} type="number" name="totalPay" placeholder='Enter Amount' id="totalPay" />
                <Button type="submit">Update</Button>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default TotalPayUpdateModal;