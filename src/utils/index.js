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
    console.log(user)
            const totalMeal=0
            const totalPay=0
            const arrayitem= reduceObjectToArray(user)
            console.log(arrayitem)
                const userTotalMeal= arrayitem.reduce((acc,cur)=>{
                        acc.totalMeal+=Number(cur.backfast)+Number(cur.lunch)+Number(cur.dinner)
                        return acc;
                },{totalMeal,totalPay})
                return(userTotalMeal)
}

export  {
    filterPages,
    reduceObjectToArray,
    numberArray,
    calculateTotalMeal,
};