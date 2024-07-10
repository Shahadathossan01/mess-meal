import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useStoreActions} from "easy-peasy";
const FormDialog=({handleClose,open,id,date})=>{
  const defaultValues={
    backfast:0,
    lunch:1,
    dinner:1
  }
    const {updateUserData}=useStoreActions(action=>action.user)
    const {register,handleSubmit}=useForm({defaultValues})
    const onSubmit=(data)=>{
      updateUserData({data,id,date})
      handleClose()
    }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{textAlign:'center'}}>Edit Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('backfast')} placeholder='Backfast' type="text" name="backfast" id="" /><br />
            <input {...register('lunch')} placeholder='Lunch' type="text" name="lunch" id="" /><br />
            <input {...register('dinner')} placeholder='Dinner' type="text" name="dinner" id="" /><br></br>
            <button onClick={onSubmit}>submit</button>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default FormDialog