import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@mui/material';

const UserFormModel=({username=false,handleClose,open,handleData,id})=>{

    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=>{
      handleData({data,id})
      handleClose()
    }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        {
          username?<DialogTitle sx={{textAlign:'center',paddingTop:'40px'}}>Change username</DialogTitle>:<DialogTitle sx={{textAlign:'center',paddingTop:'40px'}}>Change password</DialogTitle>
        }
        
        <DialogContent >
          <div>
            {
                !username&&<form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label htmlFor="current_password">Current password: </label><br />
                <input {...register("current_password",{required:true})} type="password" name="current_password" id="current_password" />
                </div>
                <div style={{marginTop:'20px'}}>
                <label htmlFor="new_password">New password: </label><br />
                <input {...register("new_password",{required:true})} type="password" name="new_password" id="new_password" />
                </div>
                <Button size='small' type='submit' sx={{marginTop:'10px'}} color='success' variant='contained'>submit</Button>
            </form>
            }
            {
                username&&<form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="user_name">username: </label><br />
                <input {...register("username",{required:true})} type="text" name="username" id="user_name" /><br />
                <Button type='submit' size='small' sx={{marginTop:"10px"
                }} color='success' variant='contained'>submit</Button>
            </form>
            }
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default UserFormModel;