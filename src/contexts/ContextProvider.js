import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notificiation: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked((initialState) => ({ ...initialState, [clicked]: !initialState[clicked] }))
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
