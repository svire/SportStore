import React,{Component} from "react";
import {Link} from "react-router-dom";

//this compoenent receives the data it required throught cartItems and cartPrice props... along with a Link that
//will navigate to the /shop/cart URL when clikedd.
//Link is disabled when a value of the items props is zero


export class CartSummary extends Component{

    getSummary=()=>{

        if(this.props.cartItems>0){
            return <span>
                {this.props.cartItems} items(s),
                ${this.props.cartPrice.toFixed(2)}
            </span>
        }
        else{
            return <span>Your cart:(empty)</span>
        }
    }

    getLinkClasses=()=>{
        return `btn btn-sm bg-dark text-white ${this.props.cartItems===0?"disabled":""}`
    }

    render(){
        return <div className="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getLinkClasses()} to="/shop/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>



        </div>
    }


} 

/*import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CartSummary extends Component {
getSummary = () => {
if (this.props.cartItems > 0) {
return <span>
{ this.props.cartItems } item(s),
${ this.props.cartPrice.toFixed(2)}
</span>} else {
return <span>Your cart: (empty) </span>
}
}
getLinkClasses = () => {
return `btn btn-sm bg-dark text-white
${ this.props.cartItems === 0 ? "disabled": ""}`;
}
render() {
return <div className="float-right">
<small>
{ this.getSummary() }
<Link className={ this.getLinkClasses() }
to="/shop/cart">
<i className="fa fa-shopping-cart"></i>
</Link>
</small>
</div>
}
}

*/