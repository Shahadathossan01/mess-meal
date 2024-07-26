import { useStoreActions, useStoreState } from "easy-peasy";
import ShowDetails from "../ShowDetails/ShowDetails";
import { useEffect, useState } from "react";
import { approvedUserArray, calculateAllUsersTotalMeal, calculateAllUsersTotalPay } from "../../utils";
import { format } from "date-fns";
import { Button, Chip, Grid } from "@mui/material";
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
        <Grid sx={{textAlign:'center',marginBottom:'20px',marginTop:'10px'}} container spacing={0}>
            <Grid item sm={4}  xs={12} md={4}>
                <h4 style={{marginBottom:'-15px'}}>Overall Meal: {allUsersMeal}</h4>
            </Grid>
            <Grid item sm={4} xs={12} md={4}>
                <h4 style={{marginBottom:'-15px'}}>Overall Pay: {allUsersTotalPay} taka</h4>   
            </Grid>
            <Grid item sm={4} xs={12} md={4}>
                <h4 style={{marginBottom:'-15px'}}>Overall Cost: {groceryItems.totalAmount} taka</h4>
            </Grid>
        </Grid>
        <hr />

        <Grid sx={{textAlign:'center',marginBottom:'20px',marginTop:'10px'}} container spacing={0}>
            <Grid item sm={4}  xs={12} md={4}>
                <Button  size="small" variant="contained" style={{color:'white',marginBottom:'5px'}}>Meal rate: {(mealRate<0 ||mealRate=='Infinity'||mealRate.toString()=='NaN')?0:mealRate}</Button>
            </Grid>
            <Grid item sm={4} xs={12} md={4}>
                <Chip sx={{marginBottom:'5px'}}  label={monthName?.toUpperCase()} color="secondary" />   
            </Grid>
            <Grid item sm={4} xs={12} md={4}>
                <div style={{marginBottom:'5px'}}>
                {
                    (user?.user.manager||user?.user.admin)&&<Button onClick={handleClickOpen} size="small" variant="contained">Show Final Result</Button>
                }
                </div>
            </Grid>
            <FinalResultModel monthName={monthName}  data={data} handleClose={handleClose} open={open}></FinalResultModel>
        </Grid>

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