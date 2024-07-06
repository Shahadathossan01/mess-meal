const reduceObjectToArray=obj=>{
    const days=['day1','day2','day3','day4','day5']
    return days.reduce((acc,cur)=>{
        if(obj[cur]){
            acc.push({
                username:obj.username,
                day:cur,
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

export  {
    filterPages,
    reduceObjectToArray
};