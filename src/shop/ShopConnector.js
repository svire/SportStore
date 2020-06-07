
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import * as ShopActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import * as CartActions from "../data/CartActionCreators"
import {CartDetails} from "./CartDetails";
import {DataGetter} from "../data/DataGetter";
import {loadData,placeOrder} from "../data/ActionCreators";
import {Checkout} from "./Checkout";
import {Thanks} from "./Thanks";

//the shop component and its Category Navigation and ProductList children need acces t the data store

//mappings give the Shop component access to all of the properties definied in the data store,
//which consist of the product and category data
const mapStateToProps = (dataStore) => ({
    ...dataStore
    })

  //  const mapDispatchToProps = {        //prije bio samo loadData
  //  loadData,addToCart,updateCartQuantity,removeFromCart,clearCart,
  //  placeOrder
  //  } SAD SE DODALO SHOP ACTIONS AND CART ACTIONS
  const mapDispatchToProps = { ...ShopActions, ...CartActions};


    //ovo i category navigation
  //  const filterProducts = (products = [], category) =>
  //  (!category || category === "All")
   //   ? products
  //  : products.filter(p => p.category.toLowerCase() === category.toLowerCase());


    //the component connects to Redux DATA STORE, and the URL router to the Shop component.
    //Redux package provides the connect funciton, which is used to link a component to data store
    export const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component {

      selectComponent = (routeProps) => {
        const wrap = (Component, Content) =>
        <Component { ...this.props} { ...routeProps}>
        { Content && wrap(Content)}
        </Component>

        switch (routeProps.match.params.section) {
            case "products":
              return wrap(DataGetter, Shop);
            
              case "cart":
              return wrap(CartDetails);
            
            case "checkout":
              return wrap(Checkout);

              case "thanks":
                  return wrap(Thanks);
              
              default:
                  return <Redirect to="/shop/products/all/1" />
        }
      }

      render() {
        return <Switch>

          <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } />
          <Route path={ "/shop/:section?/:category?/:page?"} render = { routeProps => this.selectComponent(routeProps) } />
        
        </Switch>
        }
    componentDidMount() {
        this.props.loadData(DataTypes.CATEGORIES);
       // this.props.loadData(DataTypes.PRODUCTS);
    }
})
 
//the produt data must be filtered using the selected category(featured by React Router package)
//Route is used to select the component that will be displayed to user when the browser navigates to a specific URL

//path prop tell the Route to wait until browser navigate to the /shop/products URL
// if the is an additional segment in the URL such as /shop/products/running  "/shop/products/:category?"
//than the content of that segment will be assigned to a parameter categor
//when browser navigate to a URL that matches the path prop Route displays the content specified by the render prop

//Shop component needs to know whick category the user has selected(argument passed to the route)
//the order in chich prps are applied to a component allow props to be overridden,
//filterProduct function  which selects only the products in the category chosen by the user.

//the Route is used in conjuction withc Switch and Redirect components (part of React Router pack)
//and are combine to redirect the browser to /shop/products if the browser current URL isnt mached by the Route

//bez redirecta ne valja

//the ShopConnector compoent use the componentDidMont to load the data into the the data store


/*
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart }
from "../data/CartActionCreators";
const mapStateToProps = (dataStore) => ({
...dataStore
})
const mapDispatchToProps = {
loadData,addToCart, updateCartQuantity, removeFromCart, clearCart
}
const filterProducts = (products = [], category) =>
(!category || category === "All")
? products
: products.filter(p => p.category.toLowerCase() === category.toLowerCase());
export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
class extends Component {
render() {
return <Switch>
<Route path="/shop/products/:category?"
render={ (routeProps) =>
<Shop { ...this.props } { ...routeProps }
products={ filterProducts(this.props.products,
routeProps.match.params.category) } />} />
<Redirect to="/shop/products" />
</Switch>
}
componentDidMount() {
this.props.loadData(DataTypes.CATEGORIES);
this.props.loadData(DataTypes.PRODUCTS);
}
}
)

//isto oept




*/