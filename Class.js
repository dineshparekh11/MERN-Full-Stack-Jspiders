SYNTAX
class ClassName
{
    constructor(parameters)
    {
        this.newKey  = parameter;
        this.newKey  = parameter;
    }
    methodName(parameters)
    {
        statements
    }
}


//let objName = new ClassName(aurguments for props);



EXAMPLE
class Bike
{
    constructor(brand,cc,price,color)
    {
        this.brand = brand;
        this.cc = cc;
        this.price = price;
        this.color = color;
    }
    abs()
    {
        console.log("apply abs");
    }
}
var duke200 = new Bike("KTM",200,200000,"orange");
var duke390 = new Bike("KTM",390,300000,"orange");
var duke125 = new Bike("KTM",125,100000,"orange");
var duke1290 = new Bike("KTM",1290,2000000,"orange");
console.table(duke200);
console.table(duke390);
console.table(duke125);
console.table(duke1290);


