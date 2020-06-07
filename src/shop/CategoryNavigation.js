import React, { Component } from "react";
//import { Link } from "react-router-dom";
import {ToggleLink} from '../ToggleLink';

//The selection of a category will be handled by navigating to a new URL, which is done using the Link
//component provided by the React Router package. When the user clicks a Link, the browser is asked to
//navigate to a new URL without sending any HTTP requests or reloading the application.

//The CategoryNavigation component receives the array of categories through a prop named categories.
//<Link className="btn btn-secondary btn-block" to={ this.props.baseUrl }>All</Link>


export class CategoryNavigation extends Component {
    render() {
        return <React.Fragment>
            <ToggleLink to={`${this.props.baseUrl}/all`} exact={true}>All</ToggleLink>
            
            { this.props.categories && this.props.categories.map(cat =>
            <ToggleLink  key={ cat }
                to={ `${this.props.baseUrl}/${cat.toLowerCase()}`}>
                { cat }
            </ToggleLink>
            )}
        </React.Fragment>
        }
}