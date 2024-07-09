import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";

const userModel={
    user:localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):null,
    addUser:action((state,payload)=>{
        state.user=payload;
    }),

    registerUser:thunk(async(actions,payload)=>{
        console.log(payload)
        try{
            const {data}=await axios.post('http://localhost:1337/api/auth/local/register',{
                username:payload.username,
                email:payload.email,
                password:payload.password,
                day1:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day2:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day3:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day4:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day5:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day6:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day7:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day8:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day9:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day10:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day11:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day12:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day13:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day14:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day15:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day16:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day17:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day18:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day19:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day20:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day21:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day22:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day23:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day24:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day25:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day26:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day27:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day28:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day29:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day30:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day31:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                }
            })
            actions.addUser(data)
            localStorage.setItem('userData',JSON.stringify(data))
            console.log(data)
            return data;
        }catch(error){
            console.log(error)
            throw error
        }
    }),
    loginUser:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.post('http://localhost:1337/api/auth/local',{
                identifier:payload.email,
                password:payload.password
            })
            actions.addUser(data)
            localStorage.setItem('userData',JSON.stringify(data))
            return data;

        }catch(error){
            console.error(error)
            throw error;
        }
    }),
    logoutUser:action(state=>{
        state.user=null
        localStorage.removeItem('userData')
    }),


    data:null,
    addData:action((state,payload)=>{
        state.data=payload
    }),
    fetchAllUser:thunk(async(actions)=>{
        try{
            const {data}=await axios.get('http://localhost:1337/api/users')
            actions.addData(data)
        }catch(error){
            console.log(error)
        }
    }),

    beforeUpdatedData:null,
    addBeforeUpdatedData:action((state,payload)=>{
        state.beforeUpdatedData=payload
    }),
    updateUserData:thunk(async(actions,payload)=>{
        console.log('updateddata',typeof(payload.data.backfast))
        // console.log('id',payload.id)
        // console.log('b',payload.data.backfast)
        // console.log('l',payload.data.lunch)
        // console.log('d',payload.data.dinner)
        try{
           const {data}=await axios.put(`http://localhost:1337/api/users/${payload.id}`,{
        
                [payload.date]:{
                    backfast:payload.data.backfast,
                    lunch:payload.data.lunch,
                    dinner:payload.data.dinner
                }
            })
            actions.addBeforeUpdatedData(data)

        }catch(e){
            console.error(e)
            throw Error;
        }
    }),
   
}
// const allUserModel={
    
// }
// const updateUserModel={
   
// }
const store=createStore({
    user:userModel,
    // allUser:allUserModel,
    // updateUser:updateUserModel
})

export default store;