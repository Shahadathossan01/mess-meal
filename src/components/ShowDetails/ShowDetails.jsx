
import { useStoreState } from "easy-peasy";
import { reduceObjectToArray } from "../../utils";
import DetailsCard from "../DetailsCard/DetailsCard";
import { Button } from "@mui/material";
import TotalPayUpdateModal from "../TotalPayUpdateModal/TotalPayUpdateModal";
import { useState } from "react";


const ShowDetails = ({item}) => {
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
            <h1>{item.username}</h1>
            <div style={{display:'flex',gap:'5px'}}>
            <h5>Total Pay: {item.totalPay}</h5>
            <Button onClick={handleClickOpen}>update</Button>
            <TotalPayUpdateModal id={item.id} handleClose={handleClose} open={open}></TotalPayUpdateModal>
            </div>
            </div>
            <hr />
            <div>
            {
                itemArray.map(data=>(
                    <DetailsCard id={item.id} data={data} key={data.day}></DetailsCard>
                ))
            }
            </div>
            <h1>{item.totalMeal}</h1>
        </div>
    );
};

export default ShowDetails;