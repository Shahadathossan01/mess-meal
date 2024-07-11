import { useStoreActions, useStoreState } from "easy-peasy";
import ShowDetails from "../ShowDetails/ShowDetails";
import { useEffect } from "react";
const UserDetails = () => {
    
    const {fetchAllUser}=useStoreActions(action=>action.user)
    const {data,beforeUpdatedData,totalMeal}= useStoreState(state=>state.user)
    console.log(data)
    useEffect(()=>{
        fetchAllUser()
    },[beforeUpdatedData,totalMeal])
    if(!data){
        return
    }
    return (
        <>
            <div style={{display:'flex',gap:'30px',marginBottom:'20px'}}>
            {
                data?.map(item=>(
                    <ShowDetails item={item} key={item.index}></ShowDetails>
                ))
            }
            </div>
        </>
    );
};

export default UserDetails;