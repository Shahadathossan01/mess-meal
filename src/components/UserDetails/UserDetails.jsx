import { useStoreActions, useStoreState } from "easy-peasy";
import ShowDetails from "../ShowDetails/ShowDetails";
import { useEffect, useState } from "react";
import { approvedUserArray, calculateAllUsersTotalMeal, calculateAllUsersTotalPay } from "../../utils";
import { format } from "date-fns";
import { Button, Chip } from "@mui/material";
import FinalResultModel from "../FinalResultModel/FinalResultModel";
const UserDetails =() => {
    const {groceryItems}=useStoreState(state=>state.groceryCost)
    const {fetchAllGroceryItems}=useStoreActions(action=>action.groceryCost)

    const {fetchAllUser}=useStoreActions(action=>action.user)
    const {user,data,beforeUpdatedData,totalMeal,updatedTotalPayUser,newMonthData}= useStoreState(state=>state.user)
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
            setMonthName(monthName)
            localStorage.setItem('monthName',monthName)
            return
        }
        setMonthName(monthName)
    },[newMonthData])
    
    useEffect(()=>{
        fetchAllGroceryItems()
    },[])
   
    const approvalUserData=approvedUserArray(data)
    useEffect(()=>{
        fetchAllUser()
    },[beforeUpdatedData,totalMeal,updatedTotalPayUser])
   
    const allUsersMeal=calculateAllUsersTotalMeal(data)
   const allUsersTotalPay=calculateAllUsersTotalPay(data)
   const mealRate=Math.ceil(groceryItems.totalAmount/allUsersMeal)
   if(!data){
    return
    }
    return (
        <div>
        <div style={{display:'flex',gap:'30px',flexWrap:'nowrap',justifyContent:'space-evenly',fontSize:'10px',marginBottom:'-20px',marginTop:'-10px'}}>
            <h1>Overall Meal: {allUsersMeal}</h1>
            <h1>Overall Pay: {allUsersTotalPay} taka</h1>
            <h1>Overall Cost: {groceryItems.totalAmount} taka</h1>
        </div><hr />
        <div style={{textAlign:'center',marginBottom:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            
            <h2 style={{color:'purple'}}>Meal rate: {mealRate>=0?mealRate:0}</h2>
            <Chip  label={monthName?.toUpperCase()} color="secondary" />
            
            <div>
            {
                (user?.user.manager||user?.user.admin)&&<Button onClick={handleClickOpen} size="small" variant="contained">Show Final Result</Button>
            }
            </div>
            <FinalResultModel monthName={monthName}  data={data} handleClose={handleClose} open={open}></FinalResultModel>
        </div>
            <div style={{display:'flex',gap:'20px',height:'700px',overflow:"scroll",width:'100%',marginTop:'-25px'}}>
            {
                approvalUserData?.map(item=>(
                    <ShowDetails mealRate={mealRate} item={item} key={item.index}></ShowDetails>
                ))
            }
            </div>
        </div>
    );
};

export default UserDetails;