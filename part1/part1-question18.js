let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (let prop in statistics) { 
    if((prop[0] == 'r') || (statistics[prop] % 2 != 0)){
        console.log(statistics[prop]);
    }
}

// function modifyArray(array, callback) {
//     const newArr=[];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i], function(x) {
//             return x * 2;
//         }));
//     }
//     return newArr;
// }

// function doSomething(num, callback) {
//     return callback(num + 2);
// }

// modifyArray([1,2,3], doSomething);