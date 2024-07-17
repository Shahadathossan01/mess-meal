
import { useStoreState } from "easy-peasy";
import { reduceObjectToArray } from "../../utils";
import DetailsCard from "../DetailsCard/DetailsCard";
import { Button } from "@mui/material";
import TotalPayUpdateModal from "../TotalPayUpdateModal/TotalPayUpdateModal";
import { useState } from "react";
const ShowDetails = ({item}) => {
    const {user,data}=useStoreState(state=>state.user)
    const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const itemArray=reduceObjectToArray(item)
    return (
        <div>
            <div>
            <div style={{textAlign:'center'}}>
            <h2 style={user?.user.username==item.username ? { color: '#CD5C5C' } : { color: 'black' }}>{item.username.slice(0,10)}</h2>
            </div>
                <div style={{backgroundColor:'gray',textAlign:'center'}}>
                    <h4 style={{marginTop:'-20px',color:'white'}}>Pay: {item.totalPay}</h4>
                    {
                        (user?.user.manager||user?.user.admin)&&<Button disabled={(user?.user.manager)||(user?.user.admin)?false:true} sx={{marginTop:'-30px'}} variant="contained" size="small" color="success"onClick={handleClickOpen}>update</Button>
                    }
                    
                    
                    <TotalPayUpdateModal id={item.id} handleClose={handleClose} open={open}></TotalPayUpdateModal>
                </div>
                <h5 style={{marginTop:'5px',textAlign:'center',marginBottom:'0px'}}>Total Meal: {item.totalMeal}</h5>
            </div>
            <hr />
            <div style={{overflow:'scroll',height:'515px'}}>
            {
                itemArray.map(data=>(
                    <DetailsCard id={item.id} data={data} key={data.day}></DetailsCard>
                ))
            }
            </div>
        </div>
    );
};

export default ShowDetails;