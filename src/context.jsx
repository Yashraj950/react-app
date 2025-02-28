
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

  



const AppContext = React.createContext();

const  API = "https://dummyjson.com/products"

const initialState = {
    name: "",
    image: "",
    services: [],
};
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer,initialState )




const updateHomePage = () => {
    return dispatch({
        type: "HOME_UPDATE",
        payload: {
       name: "Amazing and  Awesome",
    image: "./images/mobile.png",

        },
    });
};

const updateAboutPage = () => {
    return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
       name: "Yash raj kumar",
    image: "./images/digital.jpg",

        },
    });
};

// to get the api  data 
const getServices = async (url) => {
    try{
        const res = await fetch(url);
        const data= await res.json();
        console.log("data:->", data)
        dispatch({type: "GET_SERVICES", payload: data.products})

    }catch(error){
        console.log(error);
        
    }

}

// to call the API 

 useEffect (() => {
     getServices(API);
 },[])


  return ( 
  
  <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>

)
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
