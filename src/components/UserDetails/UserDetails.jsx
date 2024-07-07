import { useStoreState } from "easy-peasy";



const UserDetails = () => {
    const user=useStoreState(state=>state.user)
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default UserDetails;