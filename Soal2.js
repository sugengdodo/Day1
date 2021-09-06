function calculateDistance (a,t){
    const s = (1/2)*a*t*t;
    if(isNaN(a,t)){
        return `${a}${t}input must an number`;
    }
    else if(a<=0&& t<=0){
        return `$(a)/${t}Accelaration or time must be > 0`;
    }
 return `jarak yang di tempuh adalah ${s}meter/s`;
}
 console.log(calculateDistance("a","t"));
 console.log(calculateDistance(-1,9)); 
 console.log(calculateDistance(50,60)); 