import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import FormDialog from '../FromDialog/FromDialog';
import { useState } from 'react';
const DetailsCard = ({data,id}) => {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div style={{marginTop:'30px',border:'2px solid gray',textAlign:'center'}}>
            <table>
                <tr>
                    <span style={{paddingLeft:'20px'}}>date-{data.day.replace('day','')}</span>
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
                <button onClick={handleClickOpen} style={{height:'30px',width:'30px'}}>
                    <EditIcon style={{height:'100%',width:'100%'}}></EditIcon>
                    {/* <EditOffIcon></EditOffIcon> */}
                </button>
                <button style={{height:'30px',width:'30px'}}>
                    <DoneOutlineIcon style={{height:'100%',width:'100%'}}></DoneOutlineIcon>
                </button><br />
                <span>update:7/8/2024</span>
            </div>
            <FormDialog date={data.day} id={id} handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}></FormDialog>
        </div>
    );
};

export default DetailsCard;