
//commonReducer function combines multiple reducers into a single function and asks each of them to handle action
//reducers return new objects when they modify the contents of the data store
//and makes it easy to detect when an action has been handled  if(newStore!==storeData) return
//the result is that the sportsStore data store can support multiple reducers where the first to change the data store
//can support multiple reducers where the first to change the store is CONSIDERED to have processed the ACTION 


 
export const CommonReducer= (...reducers) => (storeData,action) => {
        for(let i=0;i<reducers.length;i++){
            let newStore=reducers[i](storeData,action);
            if(newStore!==storeData){   //JEL ga promjenio 
                return newStore;
            }
        }
        return storeData;
    } 