
import { Button, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const UserTableFromAdmin=()=>{
const {data,changeApprovalData,deleteUserData,createdManagerData}=useStoreState(state=>state.user)
const {fetchAllUser,changeApproval,deleteUser,createManager}=useStoreActions(action=>action.user)
useEffect(()=>{
    fetchAllUser()
    console.log('data fetch')
},[changeApprovalData,deleteUserData,createdManagerData])
if(!data){
  return
}
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Approval
              </TableCell>
              <TableCell>
                Responsibility
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                data?.map(item=>(
                <TableRow key={item.id}>
                    <TableCell>{item.username}</TableCell>
                    {
                        item.approval?<TableCell onClick={()=>changeApproval({
                            id:item.id,
                            status:false
                        })}><Button  color='success'    variant='contained' size='small'>approved</Button></TableCell>
                        :
                        <TableCell onClick={()=>changeApproval({
                            id:item.id,
                            status:true
                        })}><Button sx={{color:'black'}} size='small'>pending</Button></TableCell>
                    }
                    {
                        item.manager?<TableCell onClick={()=>createManager({
                            id:item.id,
                            status:false
                        })}><Button  color='secondary'    variant='contained' size='small'>manager</Button></TableCell>
                        :
                        <TableCell onClick={()=>createManager({
                            id:item.id,
                            status:true
                        })}><Button sx={{color:'black'}} size='small'>Create Manager</Button></TableCell>
                    }
                    <TableCell>
                      <IconButton sx={{color:"red"}} onClick={()=>deleteUser(item.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    </TableCell>
                    
                </TableRow>
            ))
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default UserTableFromAdmin;