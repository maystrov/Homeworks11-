
function calc(value) {
    result = value;
    const calcObj = {
        sum: function(intro) {
            result += intro;
            console.log(result)
        },
        substract(intro) {
            result -= intro;
            console.log(result)
        },
        divide(intro) {
            result /= intro;
            console.log(result)
        },
        multiply(intro) {
            result *= intro;
            console.log(result)
        },

        getResult: function() {
            return result;
        }
    }
    return calcObj;
}

const calcObj = calc(5);
calcObj.sum(10)        //15
calcObj.substract(3);  //12
calcObj.divide(2);     //6
calcObj.multiply(6);   //36














