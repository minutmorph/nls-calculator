function workout(equation) {
    // Use regex to replace all instances of x, ÷, ^ with *, / and **
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

    //Use regex to remove decimals from the end of an equation
    if (operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');

    // use javascript's eval function to get the result

    if (equation)
        return eval(equation);
    return 0;
}
module.exports = workout;
