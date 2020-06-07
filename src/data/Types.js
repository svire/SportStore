//CREATING DATA STORE ACTIONS and Action Creators
//Redux data stores separate reading data from the operations that change it.

//list the data types of the store
export const DataTypes = {
    PRODUCTS: "products",
    CATEGORIES: "categories",
    ORDERS:"orders"
    }

    //Actions are objects that are sent to the data store to make changes to the data it containts.
    //Action have types
    //only action i need at the moment will load the data into the store using placeholder data

    //set of actions that can be performed on the store

    //DATA_LOAD action that will populate the data store. 
    //Ucing const values avoid typos
export const ActionTypes = {
    DATA_LOAD: "data_load",
    //new data type allow me to define the URL for placing the order
    DATA_STORE:"data_store",

    //we are defining new data store action types that will be used to change the page size and specify the property
    //that will be used for sorting results.
    DATA_SET_SORT_PROPERTY: "data_set_sort",
    DATA_SET_PAGESIZE: "data_set_pagesize",

    //new actions will allow products to be added and removed from the cart and for the entire cart content to be cleared
    CART_ADD:"cart_add",
    CART_UPDATE:"cart_update",
    CART_REMOVE:"cart_remove",
    CART_CLEAR:"cart_clear"
    }


    //You can define action creators and reducers for different parts of the application in the same file
    //breaking them into separate files can make development easier, especially in large projects


  
