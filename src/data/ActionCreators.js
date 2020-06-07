import {ActionTypes,DataTypes} from "./Types.js";
//import {data as phData} from "./placeholderData";       // podaci { id: 1, name: "P1", category: "Watersports",
import {RestDataSource} from "./RestDataSource";    //sad kupi iz RestDataSource Axiosa

const dataSource=new RestDataSource();

//next i need to define an action creator function,
//which will create an ACTION object that can be proccessed by the data store to alter the data it contains
export const loadData=(dataType,params)=>({
     
    type:ActionTypes.DATA_LOAD,    //DATA_LOAD: "data_load"
    payload:
        // {dataType:dataType,          //indicates type of data that the action relates
        // data:phData[dataType]  }  vuklo iz placeholdera vuce z axiosa sad
       // dataSource.GetData(dataType).then(response=>({dataType,data:response.data})) 

       //when Promise is resolved by the data store middleware, the action object that is sent do reducer will
       //contain payload.total and payload.params
       //X-Total-Count HEADER will use to create pagiantion nav controls
       dataSource.GetData(dataType,params).then(response=>
            ({dataType,    
            data:response.data,       
            total:Number(response.headers["x-total-count"]),
            params 
    })
    )

})
//I added a new action creator that uses a Promise to send an order to the web
//service. The web service will return the stored data, which will include a unique identifier
//To process the result and add the order to the data store, I added the reducer shown in Listing
export const placeOrder=(order)=>({
    type: ActionTypes.DATA_STORE,
    payload : dataSource.StoreData(DataTypes.ORDERS, order).then(response=>({
        dataType:DataTypes.ORDERS,data:response.data}))
})


 
export const setPageSize = (newSize)=>
    ({type:ActionTypes.DATA_SET_PAGESIZE,payload:newSize});

export const setSortProperty = (newProp)=>
    ({type:ActionTypes.DATA_SET_SORT_PROPERTY,payload:newProp});

 


//ActionCreator returns an action object that has a payload property