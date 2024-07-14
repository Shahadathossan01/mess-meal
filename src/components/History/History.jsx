import { action, useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import FinalResultTable from "../FinalResultTable/FinalResultTable";
const History = () => {
    const {allHistoryData,createdHistoryData}=useStoreState(state=>state.history)
    const {fetchHistory}=useStoreActions(action=>action.history)
    useEffect(()=>{
        fetchHistory()
    },[createdHistoryData])
    if(allHistoryData.length==0){
        return 
    }
    console.log(allHistoryData)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>History</h1><hr />
            {
                allHistoryData?.data.map((data)=>(
                    <FinalResultTable monthName={data.attributes.monthName}  data={data.attributes.finalResult} key={data.index}></FinalResultTable>
                ))
            }
        </div>
    );
};

export default History;