import { Button } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import UserFormModel from "../UserFormModel/UserFormModel";

const User = () => {
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
            <h1>{user?.user.username}</h1>
            <Button onClick={handleClickOpenName}>Change your username!</  Button><br />
            <Button onClick={handleClickOpenPass}>Change your password!</Button>
            <UserFormModel handleData={changePassword} handleClose={handleClosePass} open={openPass}></UserFormModel>
            <UserFormModel handleData={changeUsername} id={user.user.id} username={true} handleClose={handleCloseName} open={openName}></UserFormModel>
        </div>
    );
};

export default User;