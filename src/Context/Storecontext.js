import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";

export const Storecontext =createContext(null)

const StorecontextProvider = (props)=> {
    const [cartItems,setcartItems]=useState({});
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromcart= (itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue ={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromcart
    }
    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
        
    )

}
export default StorecontextProvider;