//middleware will wait until the Promise is resolved and then pass on the action using the outcome of the Promise as the payload



//function that checks to see whete an actions payload is a Promiseby looking for function or objects that have a 
//then function
const isPromise = (payload) =>
    (typeof(payload) === "object" || typeof(payload) === "function")
    && typeof(payload.then) === "function";


    //asyncAction will be used as the data store middleware, and calls then on the Promise to wait for it to be rsolved
    //at which point it uses the result to replace the payload and passes it on, using the NEXT function
    //funcions that are not Middleware are passed on immediately
export const asyncActions=()=>(next)=>(action)=>{
    if(isPromise(action.payload)){
        action.payload.then(result=>next({...action,payload:result}));
    }
    else{
        next(action);
    }
}