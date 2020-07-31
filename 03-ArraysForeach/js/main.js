
/*
// For 
console.log("***** For *****");
let arr1 = ["Ferrari", "Porsche", "Tesla"];

for( let i = 0 ; i < arr1.length ; i++ ){
    console.log(arr1[i])
}

// For in

console.log("***** For in *****");
for( i in arr1 ){ 

    console.log(arr1[i]);

}

let arr1 = [1,2,3];
// index    0, 1, 2
let arr2 = [9,8,7];
// index    0, 1, 2
// arrMult[0][1]
let arrMult = [arr1, arr2];
//index         0      1
console.log(arrMult[0][2]);
// primer for iterar sobre arrMult 
for ( i in arrMult){
    
    // itera sobre arrays internos
    for ( e in arrMult[i]){
        console.log(arrMult[i][e])
    }
}


// For each
// mombreArray.forEach((element, index, array)=>{................});
let arr1 = ["Farreri", "Porsche", "Tesla"];

arr1.forEach((element, index, array)=>{
        console.log("Dato: " + element);
        console.log("Index: " + index);
        console.log("array: " + array);
})

let arr1 = ["Pera", "Manzana", "Tomate"];

arr1.forEach( (datos, index) => {
    console.log(datos);
 
});
*/
let arr1 = [2,3,4];
let arr2 = [9,8,7];
let arrMult = [ arr1, arr2 ];

arrMult.forEach( ( element, index ) => {
    console.log(element);
  


})







