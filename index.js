const afunction = function people (){
    HTMLFormControlsCollection.log("Welcome")
}
function receivesAFunction(aFunction){
    aFunction();
}
function returnsANamedFunction(){
    return function namedFunction(){
        console.log("print");
    }
}
    function returnsAnAnonymousFunction(){
        return function(){
            console.log("Anonymous function");
        }
    }

