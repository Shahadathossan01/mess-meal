import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";
// const user={
//     id:1,
//     username:'topu',
//     email:'topu@gmail.com',
//     day1:{
//         backfast:0,
//         lunch:1,
//         dinner:1,
//     },
//     day2:{
//         backfast:0,
//         lunch:1,
//         dinner:1,
//     },
//     day3:{
//         backfast:0,
//         lunch:1,
//         dinner:1,
//     },
//     day4:{
//         backfast:0,
//         lunch:1,
//         dinner:1,
//     },
//     day5:{
//         backfast:0,
//         lunch:1,
//         dinner:1,
//     }
// }
const userModel={
    user:localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):null,
    error:null,
    addUser:action((state,payload)=>{
        state.user=payload;
    }),
    addError:action((state,payload)=>{
        state.error=payload;
    }),
    fetchUser:thunk(async(actions,payload)=>{
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
        }catch(error){
            actions.addError(error)
        }
    })
}
const store=createStore({
    user:userModel,
})

export default store;