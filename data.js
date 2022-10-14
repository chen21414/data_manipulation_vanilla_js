//1. flatten array
var flattenedArray = [];
var coloursArray = [
['blue', 'green'],
['green', 'black', 'orange', 'blue'],
['green', 'red']
]
flattenedArray = coloursArray.reduce( (total, subArray)=>{
 return total.concat(subArray)
},[]);
console.log(flattenedArray)
["blue", "green", "green", "black", "orange", "blue", "green", "red"]


//actually... why this is hardly mention everywhere
var coloursArray = [
    ['blue', 'green'],
    ['green', 'black', 'orange', 'blue'],
    ['green', 'red']
    ]
   
console.log(coloursArray.flat())
// (8) ["blue", "green", "green", "black", ...]
// 0:"blue"
// 1:"green"
// 2:"green"
// 3:"black"
// 4:"orange"
// 5:"blue"
// 6:"green"
// 7:"red"


//2. filter out repeated elements
var array = ["blue", "green", "green", "black", "orange", "blue", "green", "red"];
var uniqueArray = [];

uniqueArray = array.filter((element, index, array) => {
    return array.indexOf(element) === index;
})

console.log(uniqueArray);

// ["blue", "green", "black", "orange", "red"]


//3.
//Lets back up for a second now. We get the response from the backend API.
//Now I want the unique colours from that data. What I would do is to create
//three functions that are generic functions. They can be used in other places as
//well — Helper functions.

var data = [
    {
        mood: "happy",
        fish: "robin",
        colours: ["blue", "green"]
    },
    {
        mood: "tired",
        fish: "panther",
        colours: ["green", "black", "orange", "blue"]
    },
    {
        mood: "sad",
        fish: "goldfish",
        colours: ["green", "red"]
    }
]

function getColoursFromArray(array){
    return array.map(e => {
        return typeof e.colours !== 'undefined' && e.colours
    })
}

function flattenArray(array){
    return array.reduce((total, next) => {
        return total.concat(next)
    }, [])
}

//self is array itself
function getUniqueItems(array) {
    return array.filter((e, i, self) => {
        return self.indexOf(e) === i
    })
}

let pipeline = [getColoursFromArray, flattenArray, getUniqueItems]

let result = pipeline.reduce ((total, func) => {
    return func(total)
}, data)

console.log(result);
//["blue", "green", "black", "orange", "red"]


//4.
//When you need order, use reduce
//Reduce is good when you wanna do things in a sequence. Lets say you have an
//async function and you want to call it three times but in a sequence. There are
//many ways to approach this problem. However, with reduce, we save lines of
//code, increase readability and maintain order.

function asyncFunc(e) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(e), e * 1000);
    });
}

let arr = [1, 2, 3];
let final = [];

function process(arr) {
    return arr.reduce((promise, item) => {
        return promise
        .then((result) => {
            return asyncFunc(item).then(result => final.push(result));
        })
        .catch(console.error);
    }, Promise.resolve());
}

process(arr)
    .then(()=>console.log('FINAL RESULT =>' + final));

//5, To understand Reduce better, see this snippet
Array.prototype.reduce = function(callback, initialValue) {
    var resultSoFar, i
    var n = this.length
    if (typeof initialValue !== 'undefined') {
        resultSoFar = initialValue
        i = 0
    } else {
        resultSoFar = this[0]
        i = 1
    }
    for (; i < n; i++) {
        resultSoFar = callback(resultSoFar, this[i], i, this)
    }
    return resultSoFar
}