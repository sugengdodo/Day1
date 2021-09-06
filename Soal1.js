function getAreaCircle (radius){
    const Π = 3.14
    let rms = Π * radius * radius
    if(isNaN(radius)){
        return "input harus angka"}
    else if(radius <= 0){
        return "radius harus diatas 0"}
    else{
        return rms}
 }

console.log(getAreaCircle('-1')); 
console.log(getAreaCircle('a')); 
console.log(getAreaCircle(5));
