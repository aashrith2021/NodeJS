var rect =require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err,rectangle)=>{
        if (err) {
            console.log("error",err.msg)
        }
        else {
            console.log("the are of rect"+rectangle.area()+"  "+rectangle.perimeter)
        }
    });
    console.log("this statement")
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);