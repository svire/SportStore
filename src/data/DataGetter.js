//To create a component that takes care of obtaining the product data, I added a file called DataGetter.js

import React,{Component} from "react";
import {DataTypes} from "../data/Types";


export class DataGetter extends Component{

    render(){
    return <React.Fragment>{this.props.children}</React.Fragment>
    }

    //these methods both part of the component lifecycle call getData method, 
    componentDidUpdate=()=>this.getData();
    componentDidMount=()=>this.getData();

    //this methods which get parameters from the url and compares the with those in the data store,
    //which are added after the last request// 
    
    getData=()=>{

        const dsData=this.props.products_params||{};
        

        //http://localhost:3500/api/products?_page=2&_limit=3
        //http://localhost:3500/api/products?category_like=watersports&_page=2&_limit=3&_sort=name

        const rtData={
            _limit:this.props.pageSize||5,
            _sort:this.props.sortKey||"name",
            _page:this.props.match.params.page||1,
            category_like:(this.props.match.params.category||"")==="all"?"":this.props.match.params.category
        }
        //this methods which get parameters from the url and compares the with those in the data store,
        //which are added after the last request//
        //if there is has been change a new action is dispactche that will load the data the user requeires
        if(Object.keys(rtData).find(key=>dsData[key]!==rtData[key])){
            this.props.loadData(DataTypes.PRODUCTS, rtData);
        }

    }


}
//http://localhost:3500/api/products?_page=2&_limit=3
//http://localhost:3500/api/products?category_like=watersports&_page=2&_limit=3&_sort=name

//Object.keys(_limit:3, _sort:name, _page:2, category_like:watersports ).find()
//                  ["_limit", "_sort", "_page","category_like"


//.find() JavaScript which is used to get the value of the first element in the array that satisfies the provided condition
//category_like This field filters the results to include only those objects whose category property
//matches the field value, which is Watersports in the example URL. If the category field
//is omitted, then products from all categories will be included in the results.

//_page This field selects the page number.

//_limit This field selects the page size.

//_sort This field specifies the property by which the objects will be sorted before being paginated