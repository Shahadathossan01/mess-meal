import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from 'date-fns';
const ItemsModal=({handleClose,open,handleData,add=true,id})=>{
  const [startDate, setStartDate] = React.useState(
    setHours(setMinutes(new Date(), 1), 1)
  );
    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=>{
      // console.log(data,startDate)
      console.log('called 1')
      handleData({data,startDate,id})
      handleClose()
    }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        {
          add?<DialogTitle sx={{textAlign:'center',paddingTop:'40px'}}>Add New Items</DialogTitle>:<DialogTitle sx={{textAlign:'center',paddingTop:'40px'}}>Edit Now</DialogTitle>
        }
        
        
        <DialogContent >
          <form style={{height:'400px',width:'400px',display:'flex',justifyContent:'center',alignItems:'center'}} onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label htmlFor="items">Items:</label><br />
            <input style={{marginBottom:'20px'}} {...register('items')} placeholder='Enter  your items' type="text" name="items" id="items" /><br />
            <label htmlFor="amount">Amount:</label><br />
            <input style={{marginBottom:'20px'}} {...register('amount')} placeholder='amount' type="number" name="amount" id="" /><br></br>
            {
              add&& <div>
                <label htmlFor="datetime">Date-Time:</label><br />
            <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="MM-dd-yyyy h:mm aa"
    /><br></br>
              </div>
            }
          <div style={{textAlign:'center',marginTop:'20px'}}>
            {
              add?<button type='submit'>Add Now</button>:<button type='submit'>Edit</button>
            }
          </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default ItemsModal;