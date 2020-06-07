import { createStore,applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import {asyncActions} from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer),applyMiddleware(asyncActions));


//export const SportsStoreDataStore=createStore(ShopReducer); ShopReducer DATA_LOAD

//The Redux package provides the createStore function, which sets up a new data store using a reducer.
//This is enough to create a data store to get started with, but I will add additional features later so that further
//operations can be performed and so that data can be loaded from a web service.

//the applyMiddleware is used to wrap the middleeware so that it receivse the actions, and the result is passed as an
//argument to the createStore function that creates the data store

//the effect is that the asyncActions function will be able to inspect all of the action sent to the data store and
//seamlessly deal with those with a Promise payload