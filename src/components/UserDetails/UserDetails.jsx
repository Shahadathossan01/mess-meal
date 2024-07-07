import { useStoreState } from "easy-peasy";



const UserDetails = () => {
    const user=useStoreState(state=>state.user)
    return (
        <div>
            <h1>user{user.user.user.username}</h1>
        </div>
    );
};

export default UserDetails;