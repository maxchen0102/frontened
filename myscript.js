


console.log("hello world")



const test=(a,b)=>{
    return a+b 
}
result=test(5,4)
console.log(result )


const print=()=> 
{
    a=test(5,5)
console.log("ok",a)
}

print()

class Data{
    constructor(name,age){
        this.name=name 
        this.age=age 
    }

    print(){
        console.log(`the name = ${this.name}  , the age=  ${this.age }`)
    }
}

const mydata = new Data("chris",299)
mydata.print()