import { Button, Grid } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import UserTableFromAdmin from "../UserTableFromAdmin/UserTableFromAdmin";
import UserFormModel from "../UserFormModel/UserFormModel";
import { useState } from "react";

const Admin = () => {
    const {user}=useStoreState(state=>state.user)
    const {changePassword,changeUsername}=useStoreActions(action=>action.user)
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
    if(!user){
        return
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Admin Panel</h1>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h2>{user?.user.username}</h2>
                        <Button onClick={handleClickOpenName}>Change your username!</  Button><br />
                        <Button onClick={handleClickOpenPass}>Change your password!</Button>
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