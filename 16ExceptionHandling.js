let num1=200;
let num2=10;

try{
    console.log(num1/num2)
    console.log(num1*a)
}
catch(error){
    console.log('An Error Occured')
    console.log(`Error :${error}`)
    console.log(`Error Message :${error.message}`)
}
finally{
    console.log('This will always execute')
}


//throw or custom exception

function isPositive(a){
    if(a>0){
        console.log('yes')
    }else if(a==0){
        throw new Error('Zerp Errpr')
    }else {
        throw new Error('Negative Error')
    }
}
isPositive(0)