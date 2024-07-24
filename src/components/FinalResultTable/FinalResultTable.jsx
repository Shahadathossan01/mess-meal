import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { calculateAllUsersTotalMeal, calculateAllUsersTotalPay, totalAdd, totalMealCost, totalReturn, } from '../../utils';
import { useStoreActions, useStoreState } from 'easy-peasy';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const FinalResultTable=({data,monthName})=>{
  const {groceryItems}=useStoreState(state=>state.groceryCost)
    const {fetchAllGroceryItems}=useStoreActions(action=>action.groceryCost)
    React.useEffect(()=>{
        fetchAllGroceryItems()
    },[])
  const usersTotalMeals=calculateAllUsersTotalMeal(data)
  const usersTotalPay=calculateAllUsersTotalPay(data)
  const mealRate=Math.ceil(groceryItems.totalAmount /usersTotalMeals)
  const totalReturnValue=totalReturn(data,mealRate)
  const totalAddValue=totalAdd(data,mealRate)
  const totalMealCostValue=totalMealCost(data,mealRate)
    if(!data){
      return
    }
  return (
          <div style={{paddingTop:'5px'}}>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <h3 style={{color:'#E09540'}}>Meal Rate: {mealRate}<hr></hr></h3>
        <h3 style={{color:'#4540E0'}}>
          {monthName}<hr></hr>
        </h3>
        <h3 style={{color:'#E09540'}}>Overall Cost: {groceryItems.totalAmount}<hr></hr></h3>
      </div>
      <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Meal</StyledTableCell>
            <StyledTableCell >Meal Cost</StyledTableCell>
            <StyledTableCell>Pay</StyledTableCell>
            <StyledTableCell>Return</StyledTableCell>
            <StyledTableCell>Add</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data) => (
    
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.username}
              </StyledTableCell>
              <StyledTableCell>{data.totalMeal}</StyledTableCell>
              <StyledTableCell >{Math.ceil(data.totalMeal*mealRate)}</StyledTableCell>
              <StyledTableCell >{data.totalPay}</StyledTableCell>
              <StyledTableCell>{(data.totalMeal*mealRate)-data.totalPay<1?0-((data.totalMeal*mealRate)-data.totalPay):'0'}</StyledTableCell>
              <StyledTableCell>{(data.totalMeal*mealRate)-data.totalPay>1?(data.totalMeal*mealRate)-data.totalPay:'0'}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {}
              </StyledTableCell>
                <StyledTableCell sx={{color:'white',backgroundColor:'#409DE0'}}>Total Meal: {usersTotalMeals}</StyledTableCell>
                <StyledTableCell sx={{color:'white',backgroundColor:'#409DE0'}} >Total Meal Cost: {totalMealCostValue}</StyledTableCell>
                <StyledTableCell sx={{color:'white',backgroundColor:'#409DE0'}} >Total Pay: {usersTotalPay}</StyledTableCell>
                <StyledTableCell sx={{color:'white',backgroundColor:'#409DE0'}}>Total Return: {totalReturnValue}</StyledTableCell>
                <StyledTableCell sx={{color:'white',backgroundColor:'#409DE0'}}>Total Add: {totalAddValue}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
  );
}
export default FinalResultTable;