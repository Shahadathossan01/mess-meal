
import { useState } from "react";
import ItemsModal from "../FromDialog/ItemsModal/ItemsModal";
import GroceryItemsTable from "../GroceryItemsTable/GroceryItemsTable";
import { useStoreActions} from "easy-peasy";
import { Button } from "@mui/material";

const GroceryCost = () => {
  const {createGrocery}=useStoreActions(action=>action.groceryCost)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Grocery Cost</h1><hr />
            <Button variant="contained" color="success"   onClick={handleClickOpen}>Add Items</Button>
            <ItemsModal handleData={createGrocery} handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}></ItemsModal>
            <div>
              <GroceryItemsTable></GroceryItemsTable>
            </div>
        </div>
    );
};

export default GroceryCost;