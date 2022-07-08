function sum(...args) {

    const sumVal = [...args].reduce((a, c) => 
    a+ c , 0)
 return sumVal
}

module.exports = sum;