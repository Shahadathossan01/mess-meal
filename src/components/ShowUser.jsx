import reduceObjectToArray from "../utils";
import transformObjectToArray from "../utils";
import mapObjectToArray from "../utils";

const ShowUser = ({item}) => {
    const itemArray=reduceObjectToArray(item)
    console.log(itemArray)
    return (
        <div>
            <h1>{item.username}</h1>
            {
                itemArray.map(item=>(
                    <div key={item.index} style={{margin:'20px',backgroundColor:'gray'}}>
                        <h4>Date:{item.day}</h4>
                        <h1>Backfast:{item.Backfast}</h1>
                        <h1>Lunch:{item.Lunch}</h1>
                        <h1>Dinner:{item.dinner}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowUser;