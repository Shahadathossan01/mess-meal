const reduceObjectToArray=obj=>{
    const days=['day1','day2','day3','day4','day5','day6','day7','day8','day9','day10','day11','day12','day13','day14','day15','day16','day17','day18','day19','day20','day21','day22','day23','day24','day25','day26','day27','day28','day29','day30','day31']
    return days.reduce((acc,cur)=>{
        if(obj[cur]){
            acc.push({
                username:obj.username,
                day:cur,
                updatedDateTime:obj.updatedDateTime,
                ...obj[cur]
            })
        }
        return acc;
    },[])
}

const filterPages=(pages,user)=>{
    return pages.filter(page=>{
        if(user==null && page==='Logout'){
            return false
        }
        if(user!=null && page==='Login'){
            return false
        }
        return true;
    })
}
const numberArray=()=>{
    let array=[]
    for(let i=1;i<=31;i++){
        array.push(i)
    }
    return array;
}
const calculateTotalMeal=(user)=>{
            const totalMeal=0
            const totalPay=0
            const arrayitem= reduceObjectToArray(user)
                const userTotalMeal= arrayitem.reduce((acc,cur)=>{
                        acc.totalMeal+=Number(cur.backfast)+Number(cur.lunch)+Number(cur.dinner)
                        return acc;
                },{totalMeal,totalPay})
                return(userTotalMeal)
}
const calculateAllUsersTotalMeal=(users)=>{
   return users.reduce((acc,cur)=>{
        acc+=Number(cur.totalMeal)
        return acc;
    },0)
}
const calculateAllUsersTotalPay=(users)=>{
   return users.reduce((acc,cur)=>{
        acc+=Number(cur.totalPay)
        return acc;
    },0)
}
const calculateGroceryTotalAmount=(data)=>{
    return data.reduce((acc,cur)=>{
        acc+=cur.attributes.amount
        return acc;
    },0)
}
const allUsersTotalMeals=(data)=>{
    return data.reduce((acc,cur)=>{
        acc+=cur.totalMeal;
        return acc;
    },0)
}
const totalReturn=(data,mealRate)=>{
    return data.reduce((acc,cur)=>{
        const result=cur.totalMeal*mealRate-cur.totalPay;
        if(result<1){
            acc+=result;
        }
        return acc;
    },0)
}
const totalAdd=(data,mealRate)=>{
    return data.reduce((acc,cur)=>{
        const result=cur.totalMeal*mealRate-cur.totalPay;
        if(result>1){
            acc+=result;
        }
        return acc;
    },0)
}
const totalMealCost=(data,mealRate)=>{
    return data.reduce((acc,cur)=>{
        acc+=cur.totalMeal*mealRate
        return acc;
    },0)
}
export  {
    filterPages,
    reduceObjectToArray,
    numberArray,
    calculateTotalMeal,
    calculateAllUsersTotalMeal,
    calculateAllUsersTotalPay,
    calculateGroceryTotalAmount,
    allUsersTotalMeals,
    totalReturn,
    totalAdd,
    totalMealCost
};