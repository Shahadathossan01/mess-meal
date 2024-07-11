import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import GroceryItemTableRow from "../GroceryItemTableRow/GroceryItemTableRow";
const columns = [
    'Items',
    'Amount',
    'Date Time',
    'Actions'
  ];
  
  
const GroceryItemsTable = () => {
    
    const {grocery,groceryItems,updatedGroceryItem,deleteGrocerydata,totalAmount}=useStoreState(state=>state.groceryCost)
    console.log(updatedGroceryItem)
    const {fetchAllGroceryItems,updateGrocery}=useStoreActions(action=>action.groceryCost)
    useEffect(()=>{
        fetchAllGroceryItems()    
    },[grocery,updatedGroceryItem,deleteGrocerydata])
    if(!groceryItems){
        return
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
               groceryItems.data?.map((item) => (
                // console.log(item.id)
                    <>
                        <GroceryItemTableRow id={item.id} updateGrocery={updateGrocery} item={item}></GroceryItemTableRow>
                    </>
                ))
                
            }
            <TableRow>
                <TableCell></TableCell>
                <TableCell style={{color:'white',backgroundColor:'gray'}}>Total Amount: {totalAmount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    );
};

export default GroceryItemsTable;