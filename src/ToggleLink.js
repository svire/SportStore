import React,{Component} from "react";
import {Route,Link} from "react-router-dom";



//isto samo sto nema  className
////<Link className="btn btn-secondary btn-block" to={ this.props.baseUrl }>All</Link> zamjenjeno sa 
/// <ToggleLink to={this.props.baseUrl} exact={true}>All</ToggleLink>
export class ToggleLink extends Component{

    render(){
        return <Route path={this.props.to} exact={this.props.exact} children={routeProps=>
            {
                const baseClasses=this.props.className||"m-2 btn btn-block";
                const activeClass=this.props.activeClass||"btn-primary";
                const inActiveClass=this.props.inActiveClass||"btn-secondary";
                const combinedClasses=`${baseClasses} ${routeProps.match?activeClass:inActiveClass}`

                return <Link to={this.props.to} className={combinedClasses}>
                    {
                        this.props.children
                    }
                </Link>
            }
        }/>
    }       //samo se mjenja class name za svaki 


}