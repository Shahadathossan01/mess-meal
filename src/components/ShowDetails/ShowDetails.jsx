
import { reduceObjectToArray } from "../../utils";
import DetailsCard from "../DetailsCard/DetailsCard";


const ShowDetails = ({item}) => {
    const itemArray=reduceObjectToArray(item)
    return (
        <div>
            <h1>{item.username}</h1><hr />
            <div>
            {
                itemArray.map(data=>(
                    <DetailsCard id={item.id} data={data} key={data.day}></DetailsCard>
                ))
            }
            </div>
        </div>
    );
};

export default ShowDetails;