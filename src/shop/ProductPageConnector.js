import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setPageSize, setSortProperty} from "../data/ActionCreators";
import { DataStore } from "apollo-client/data/store";

const mapStateToPros = dataStore => dataStore;
const mapDispatchToProps= {setPageSize,setSortProperty};

const mergeProps = (dataStore, actionCreators, router) => ({
    ...dataStore, ...router, ...actionCreators, currentPage:Number(router.match.params.page),    
    pageCount:Math.ceil((dataStore.products_total ||dataStore.pageSize||5)/(DataStore.pageSize||5)),
    navigateToPage:(page)=>router.history.push(`/shop/products/${router.match.params.category}/${page}`)
     
})

export const ProductPageConnector =(PageComponent)=>
    withRouter(connect(mapStateToPros,mapDispatchToProps,mergeProps)(PageComponent));