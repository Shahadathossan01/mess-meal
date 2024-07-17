import axios from "axios";
import { compareAsc, format } from "date-fns";
import { action, createStore, thunk } from "easy-peasy";
import { calculateGroceryTotalAmount, calculateTotalMeal } from "../utils";

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
                    dinner:0,
                    updatedDateTime:null
                },
                day2:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day3:{
                    backfast:0,
                    lunch:0,
                    dinner:0
                },
                day4:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day5:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day6:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day7:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day8:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day9:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day10:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day11:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day12:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day13:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day14:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day15:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day16:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day17:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day18:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day19:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day20:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day21:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day22:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day23:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day24:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day25:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day26:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day27:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day28:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day29:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day30:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                },
                day31:{
                    backfast:0,
                    lunch:0,
                    dinner:0,
                    updatedDateTime:null
                }
            })
            actions.addUser(data)
            localStorage.setItem('userData',JSON.stringify(data))
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
    data:[],
    addData:action((state,payload)=>{
        let newArray=[]
        payload.map(item=>{
            if(item.admin!=true){
                newArray.push(item)
            }
        })
        state.data=newArray.map((user)=>({
            ...user,
            totalMeal:calculateTotalMeal(user).totalMeal //!calculate user TOTAL MEAL
        }))
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
        const date=new Date()
        const formattedDate=format(date,'MM:dd:yyyy HH:mm a')
        try{
           const {data}=await axios.put(`http://localhost:1337/api/users/${payload.id}`,{
                [payload.date]:{
                    backfast:payload.data.backfast,
                    lunch:payload.data.lunch,
                    dinner:payload.data.dinner,
                    updatedDateTime:formattedDate
                }
            })
            actions.addBeforeUpdatedData(data)

        }catch(e){
            console.error(e)
            throw Error;
        }
    }),
    updatedTotalPayUser:null,
    addUpdatedTotalPayUser:action((state,payload)=>{
        state.updatedTotalPayUser=payload;
    }),
    updateUserTotaPay:thunk(async(actions,payload)=>{
        console.log(payload)
        try{
            const {data}=await axios.put(`http://localhost:1337/api/users/${payload.id}`,{
                 totalPay:payload.data.totalPay
             })
             actions.addUpdatedTotalPayUser(data)
         }catch(e){
             console.error(e)
             throw Error;
         }
    }),
    changePassword:thunk(async(actions,payload)=>{
        const token=JSON.parse(localStorage.getItem('userData'))
        try{
            const {data}=await axios.post('http://localhost:1337/api/auth/change-password',
            {
                currentPassword:payload.data.current_password,
                password:payload.data.new_password,
                passwordConfirmation:payload.data.new_password
            },
            {
                headers:{
                    Authorization:`Bearer ${token.jwt}`
                }
            }
        
        )
        localStorage.removeItem('userData')
        localStorage.setItem('userData',JSON.stringify(data))
        }catch(e){
            console.log(e)
        }
    }),
    changename:null,
    addChangeName:action((state,payload)=>{
        state.changename=payload
    }),
    changeUsername:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.put(`http://localhost:1337/api/users/${payload.id}`,{
                username:payload.data.username
             })
             const oldUser=JSON.parse(localStorage.getItem('userData'))
             const newUser={
                jwt:oldUser.jwt,
                user:data
             }
             localStorage.removeItem('userData')
             localStorage.setItem('userData',JSON.stringify(newUser))
             actions.addUser(newUser)
         }catch(e){
             console.error(e)
             throw Error;
         }
    }),
    changeApprovalData:null,
    addChangeApprovalData:action((state,payload)=>{
        state.changeApprovalData=payload
    }),
    changeApproval:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.put(`http://localhost:1337/api/users/${payload.id}`,{
                approval:payload.status
             })
            actions.addChangeApprovalData(data)
         }catch(e){
             console.error(e)
             throw Error;
         }
    }),
    deleteUserData:null,
    addDeleteUser:action((state,payload)=>{
        state.deleteUserData=payload
    }),
    deleteUser:thunk((async(actions,payload)=>{
        console.log(payload)
        try{
            const {data}=await axios.delete(`http://localhost:1337/api/users/${payload}
            `)
            actions.addDeleteUser(data)
        }catch(e){
            console.log(e)
        }
    }))
}
const groceryCostModel={
    grocery:null,
    groceryItems:[],
    updatedGroceryItem:null,
    deleteGrocerydata:null,
    addGrocery:action((state,payload)=>{
        state.grocery=payload
    }),
    createGrocery:thunk(async(actions,payload)=>{
        console.log(payload)
        try{
            const {data}=await axios.post('http://localhost:1337/api/grocery-costs',{
                data:{
                    grocery:payload.data.items,
                    amount:payload.data.amount,
                    dateTime:payload.startDate
                }
            })
            actions.addGrocery(data)
        }catch(e){
            console.log(e)
            throw Error
        }
    }),
    addGroceryItems:action((state,payload)=>{
        state.groceryItems={
            ...payload,
            totalAmount:calculateGroceryTotalAmount(payload.data)
        }
    }),
    fetchAllGroceryItems:thunk(async(actions)=>{
        try{
            const {data}=await axios.get('http://localhost:1337/api/grocery-costs')
            actions.addGroceryItems(data)
        }catch(e){
            console.log(e)
            throw Error
        }
    }),
    addUpdatedGroceryItem:action((state,payload)=>{
        state.updatedGroceryItem=payload
    }),
    updateGrocery:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.put(`http://localhost:1337/api/grocery-costs/${payload.id}`,{
                data:{
                    grocery:payload.data.items,
                    amount:payload.data.amount
                }
            })
            actions.addUpdatedGroceryItem(data.data)
        }catch(e){
            console.log(e)
            throw Error
        }
    }),
    addDeleteGrocery:action((state,payload)=>{
        state.deleteGrocerydata=payload
    }),
    deleteGrocery:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.delete(`http://localhost:1337/api/grocery-costs/${payload}`)
            actions.addDeleteGrocery(data.data)
        }catch(e){
            console.log(e)
            throw Error;
        }
    }),
}
const historyModel={
    createdHistoryData:null,
    allHistoryData:[],
    addCreateHistory:action((state,paylod)=>{
        state.createdHistoryData=paylod
    }),
    addAllHistoryData:action((state,payload)=>{
        state.allHistoryData=payload
    }),
    createHistory:thunk(async(actions,payload)=>
        {
            if(payload.allHistoryData.data.length==0){
                try{
                    const {data}=await axios.post('http://localhost:1337/api/histories',{
                        data:{
                            finalResult:payload.data,
                            monthName:payload.monthName
                        }
                    })
                    
                    actions.addCreateHistory(data)
                    
                }catch(e){
                    console.log(e)
                    throw Error;
                }
            }
            payload.allHistoryData.data.map(async item=>{
                if((item.attributes.monthName!=payload.monthName)){
                    try{
                        const {data}=await axios.post('http://localhost:1337/api/histories',{
                            data:{
                                finalResult:payload.data,
                                monthName:payload.monthName
                            }
                        })
                        
                        actions.addCreateHistory(data)
                        
                    }catch(e){
                        console.log(e)
                        throw Error;
                    }
                }
            })
       
    }),
    fetchHistory:thunk(async(actions)=>{
        try{
            const {data}=await axios.get('http://localhost:1337/api/histories')

            actions.addAllHistoryData(data)
        }catch(e){
            console.log(e)
            throw Error;
        }
    })
}
const store=createStore({
    user:userModel,
    groceryCost:groceryCostModel,
    history:historyModel
    
})

export default store;