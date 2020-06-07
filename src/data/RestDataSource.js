import Axios from "axios";
import {RestUrls} from "./Urls";

//this class uses the Axios to maxe HTTP request to make HTTP requests to the web service
//Axios popular package for handling HTTP and automatically processes responses to transform JSON into JS objects
/*
export class RestDataSource{

        //result of GetData methos is a Promise that is resolved when the respone is received from the webservice
    GetData=(dataType,)=>
        this.SendRequest("get",RestUrls[dataType]);
                                            //2
    //[DataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/api/products`, //[DataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/api/categories`    

              // "get"   2   
    SendRequest=(method,url)=>Axios.request({method,url});
}
*/

export class RestDataSource{


    constructor(err_handler){        
            this.error_handler=err_handler||(()=>{});        
    }


    GetData=(dataType,params)=>          
        this.SendRequest("get",RestUrls[dataType],params);

//I added a method to the REST data source that receives the order object and sends it to the web service.
        

    StoreData=(dataType,data)=>
        this.SendRequest("post",RestUrls[dataType],{},data);
        
    

     //   SendRequest=(method,url,params)=>Axios.request({
     //       method,url,params
     //    });
//The Axious package will receive a data object and take care of formatting it so that it can be sent to the web service

    SendRequest=(method,url,params,data)=>
        Axios.request({method,url,params,data});
}
//i changed formulation of the URL for the request that obtains the product data to include request parameters, which will
//be used to request pages and specify a category
//axious will use the parameters to add query string to the request URL
