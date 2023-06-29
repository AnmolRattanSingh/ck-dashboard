import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../config/firebase';


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
    const [userProfile, setUserProfile] = useState(null);
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    const fetchUserProfile = () => {
        if (auth.currentUser) {
            setUserProfile({
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                photoURL: auth.currentUser.photoURL,
            });
        }
    };

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
            setPending(false);
            fetchUserProfile();
        });
    }, []);

    const handleClick = (clicked) => {
        setIsClicked((initialState) => ({ ...initialState, [clicked]: !initialState[clicked] }))
    }

    if (pending) {
        return <div>Loading...</div>;
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
                setScreenSize,
                userProfile,
                setUserProfile,
                user,
                setUser,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
