function receivesAFunction(callback){
    callback()
}

receivesAFunction('Spy')


function returnsANamedFunction(){
    return function named(){
        console.log('x')
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('y')
    }
}

