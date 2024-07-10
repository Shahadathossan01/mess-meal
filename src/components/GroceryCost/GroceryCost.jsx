
import { useState } from "react";
import ItemsModal from "../FromDialog/ItemsModal/ItemsModal";
import GroceryItemsTable from "../GroceryItemsTable/GroceryItemsTable";
import { useStoreActions} from "easy-peasy";

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
            <h1>Grocery Cost</h1>
            <button onClick={handleClickOpen}>Add Items</button>
            <ItemsModal handleData={createGrocery} handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}></ItemsModal>
            <div>
              <GroceryItemsTable></GroceryItemsTable>
            </div>
        </div>
    );
};

export default GroceryCost;