import { Button, Grid } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import UserTableFromAdmin from "../UserTableFromAdmin/UserTableFromAdmin";
import UserFormModel from "../UserFormModel/UserFormModel";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Admin = () => {
    const {user,data}=useStoreState(state=>state.user)
    const {deleteAllGrocery,fetchAllGroceryItems}=useStoreActions(action=>action.groceryCost)
    const {groceryItems}=useStoreState(state=>state.groceryCost)
    useEffect(()=>{
      fetchAllGroceryItems
    },[])
    const {changePassword,changeUsername,startNewMonth}=useStoreActions(action=>action.user)
    const [openPass, setOpenPass] = useState(false);

    const handleClickOpenPass = () => {
      setOpenPass(true);
    };
  
    const handleClosePass = () => {
      setOpenPass(false);
    };
    const [openName, setOpenName] = useState(false);

    const handleClickOpenName = () => {
      setOpenName(true);
    };
  
    const handleCloseName = () => {
      setOpenName(false);
    };
    const handleToStartNewMonth=()=>{
      const isConfirmed=window.confirm("Do you want to proceed?")
      if(isConfirmed){
      startNewMonth(data)
      deleteAllGrocery(groceryItems.data)
      localStorage.removeItem('monthName')
      toast.success('ff')
      }
      
    }
    if(!user){
        return
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Admin Panel</h1>
            
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h1>Name: {user?.user.username}</h1>
                        
                        <Button onClick={handleToStartNewMonth}  variant="contined" style={{backgroundColor:'#EF9C66',color:'white'}}>to start new month</Button><br />
          
                        <Button onClick={handleClickOpenName}>Change your username!</  Button><br />
                        <Button onClick={handleClickOpenPass}>Change your password!</Button><br />
                        <UserFormModel handleData={changePassword} handleClose={handleClosePass} open={openPass}></UserFormModel>
                        <UserFormModel handleData={changeUsername} id={user.user.id} username={true} handleClose={handleCloseName} open={openName}></UserFormModel>
                    </Grid>
                    <Grid item xs={8}>
                        <UserTableFromAdmin></UserTableFromAdmin>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Admin;