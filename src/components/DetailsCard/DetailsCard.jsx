import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import FormDialog from '../FromDialog/FromDialog';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useStoreState } from 'easy-peasy';
const DetailsCard = ({data,id}) => {
    const {user}=useStoreState(state=>state.user)
    const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div style={{border:'2px solid gray',textAlign:'center',height:'180px',width:'150px',
            backgroundColor:'#FBF6E2',
        marginBottom:'5px'}}>
            <table>
                <tr style={{textAlign:'center',}}>
                    <Button variant="contained"  style= {{paddingLeft:'10px',marginLeft:'30px',
                    color:'black',
                    backgroundColor:'#EF9C66'}}>date-{data.day.replace('day','')}</Button>
                </tr>
                <tr>
                    <th>B</th>
                    <th>L</th>
                    <th>D</th>
                </tr>
                <tr>
                    <td>{data.backfast}</td>
                    <td>{data.lunch}</td>
                    <td>{data.dinner}</td>
                </tr>
            </table>
            <div>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <button disabled={(user?.user.manager)||(user?.user.username===data.username)||(user?.user.admin)?false:true} onClick={handleClickOpen} style={{height:'30px',width:'30px'}}>
                    <EditIcon style={{height:'100%',width:'100%'}}></EditIcon>
                    {/* <EditOffIcon></EditOffIcon> */}
                </button>
                <button style={{height:'30px',width:'30px'}}>
                    <DoneOutlineIcon style={{height:'100%',width:'100%'}}></DoneOutlineIcon>
                </button><br />
                </div>
                {
                    data.updatedDateTime&&<div> 
                        <span>last Update</span><br />
                        <span>{data.updatedDateTime}</span>
                        </div>
                }
            </div>
            <FormDialog date={data.day} id={id} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}></FormDialog>
        </div>
    );
};

export default DetailsCard;