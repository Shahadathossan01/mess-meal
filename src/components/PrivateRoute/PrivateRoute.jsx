import { Button } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const {user}=useStoreState(state=>state.user)
    if(user?.user.admin || user?.user.manager){
        return children
    }
    else if(user){
        return <div style={{height:'400px',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                    <h1>You are not able to show this page!!</h1><hr />
                    <Button size='small'>Only can...admin and manager!!</Button><hr />
                    </div>
               </div>
    }
    else{
        return navigate('/login')
    }
};

export default PrivateRoute;