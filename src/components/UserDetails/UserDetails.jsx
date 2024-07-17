import { useStoreActions, useStoreState } from "easy-peasy";
import ShowDetails from "../ShowDetails/ShowDetails";
import { useEffect, useState } from "react";
import { approvedUserArray, calculateAllUsersTotalMeal, calculateAllUsersTotalPay } from "../../utils";
import { format } from "date-fns";
import { Button, Chip } from "@mui/material";
import FinalResultModel from "../FinalResultModel/FinalResultModel";
const UserDetails = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [monthName,setMonthName]=useState('')
    useEffect(()=>{
        let monthName=localStorage.getItem('monthName')
        if(!monthName){
            const date=new Date()
            const monthName=format(date,'MMMM')
            localStorage.setItem('monthName',monthName)
        }
        setMonthName(monthName)
    },[])
    const {groceryItems}=useStoreState(state=>state.groceryCost)
    const {fetchAllGroceryItems}=useStoreActions(action=>action.groceryCost)
    useEffect(()=>{
        fetchAllGroceryItems()
    },[])
    const {fetchAllUser}=useStoreActions(action=>action.user)
    const {user,data,beforeUpdatedData,totalMeal,updatedTotalPayUser}= useStoreState(state=>state.user)
    const approvalUserData=approvedUserArray(data)
    useEffect(()=>{
        fetchAllUser()
    },[beforeUpdatedData,totalMeal,updatedTotalPayUser])
    if(!data){
        return
    }
    const allUsersMeal=calculateAllUsersTotalMeal(data)
   const allUsersTotalPay=calculateAllUsersTotalPay(data)
    return (
        <div>
        <div style={{display:'flex',gap:'30px',flexWrap:'nowrap',justifyContent:'space-evenly',fontSize:'10px',marginBottom:'-20px',marginTop:'-10px'}}>
            <h1>Overall Meal: {allUsersMeal}</h1>
            <h1>Overall Pay: {allUsersTotalPay}</h1>
            <h1>Overall Cost: {groceryItems.totalAmount}</h1>
        </div><hr />
        <div style={{textAlign:'center',marginBottom:'10px'}}>
            <Chip  label={monthName?.toUpperCase()} color="secondary" />
            {
                (user?.user.manager||user?.user.admin)&&<Button onClick={handleClickOpen} variant="contained" sx={{marginLeft:'10%'}}>Show Final Result</Button>
            }
            <FinalResultModel monthName={monthName}  data={data} handleClose={handleClose} open={open}></FinalResultModel>
        </div>
            <div style={{display:'flex',gap:'20px',height:'700px',overflow:"scroll",width:'100%',marginTop:'-25px'}}>
            {
                approvalUserData?.map(item=>(
                    <ShowDetails item={item} key={item.index}></ShowDetails>
                ))
            }
            </div>
        </div>
    );
};

export default UserDetails;