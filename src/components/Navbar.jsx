import React, { useEffect } from "react";
import { auth } from '../config/firebase';
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from "antd";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <Tooltip title={title} placement="top">
        <button
            type="button"
            onClick={customFunc}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </Tooltip>
);

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className={`flex ${activeMenu ? 'justify-end' : 'justify-between'} p-3 md:ml-6 md:mr-6 relative`}>
            {!activeMenu && (
                <NavButton
                    title="Menu"
                    customFunc={() =>
                        setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                    color="black"
                    icon={<AiOutlineMenu size={20} />}
                />
            )}
            <div className="flex">
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick("cart")}
                    color="black"
                    icon={<FiShoppingCart size={20} />}
                />
                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick("chat")}
                    color="black"
                    icon={<BsChatLeft size={20} />}
                />
                <NavButton
                    title="Notifications"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick("notification")}
                    color="black"
                    icon={<RiNotification3Line size={20} />}
                />
                <Tooltip title="User Profile" placement="top">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick("userProfile")}
                    >
                        {
                            auth.currentUser ? (
                                <>
                                    {
                                        auth.currentUser.photoURL ? (
                                            <img className="rounded-full w-8 h-8" src={auth.currentUser.photoURL} />
                                        ) : (
                                            <CgProfile size={20} />
                                        )
                                    }
                                    <span className="text-gray-500 fond-bold text-14">
                                        {auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <CgProfile size={20} />
                                    <span className="text-gray-500 fond-bold text-14">Log in </span>
                                </>
                            )
                        }
                        <MdKeyboardArrowDown
                            className="text-gray-400 text-14"
                            size={25}
                        />
                    </div>
                </Tooltip>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && (<UserProfile />)}
            </div>
        </div>
    );
};

export default Navbar;
