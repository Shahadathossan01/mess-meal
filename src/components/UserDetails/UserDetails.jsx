import { useStoreActions, useStoreState } from "easy-peasy";
import { numberArray } from "../../utils";
import ShowDetails from "../ShowDetails/ShowDetails";
import { useEffect } from "react";

const dateArray=numberArray()
const UserDetails = () => {
    
    const {fetchAllUser}=useStoreActions(action=>action.user)
    const {data,beforeUpdatedData}= useStoreState(state=>state.user)
    console.log(beforeUpdatedData?.updatedAt)
    useEffect(()=>{
        fetchAllUser()
    },[beforeUpdatedData])
    if(!data){
        return
    }
    return (
        <div style={{display:'flex',gap:'20px'}}>
            <div>
                <div style={{marginLeft:'20px'}}>
                {
                    dateArray?.map(item=>(
                        <div key={item.day}>
                            <p style={{marginTop:'100px'}}>{item}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div style={{display:'flex',gap:'30px'}}>
            {
                data?.map(item=>(
                    <ShowDetails item={item} key={item.index}></ShowDetails>
                ))
            }
            </div>
            <h1>Status</h1>
        </div>
    );
};

export default UserDetails;