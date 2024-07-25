import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FinalResultTable from '../FinalResultTable/FinalResultTable';
import { usePDF } from 'react-to-pdf';
import { useStoreActions, useStoreState } from 'easy-peasy';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FinalResultModel=({handleClose,open,data,monthName})=>{

  const {allHistoryData,createdHistoryData}=useStoreState(state=>state.history)
    const {fetchHistory}=useStoreActions(action=>action.history)
    React.useEffect(()=>{
        fetchHistory()
    },[createdHistoryData])

  const {createHistory}=useStoreActions(action=>action.history)
  const {toPDF,targetRef}=usePDF({filename:'finalResult.pdf'})
  
 const handleClick=()=>{
  toPDF()
  handleClose()
  createHistory({data,monthName,allHistoryData})
 }
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h7" component="div">
              Final Result
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClick}>
              save as pdf
            </Button>
          </Toolbar>
        </AppBar>
        <div ref={targetRef}>
        <FinalResultTable monthName={monthName} data={data}></FinalResultTable>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
export default FinalResultModel;