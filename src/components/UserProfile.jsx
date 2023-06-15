import React, { useEffect, useState } from 'react';
import { auth, googleAuth } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { Button } from 'antd';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = () => {
      if (auth.currentUser) {
        setUserProfile({
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL || avatar,
        });
      }
    };

    fetchUserProfile();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        {/* conditional rendering based on if user is logged in */}
        {auth?.currentUser ? (
          <div className="flex items-center">
            <img
              src={userProfile?.photoURL}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {userProfile?.displayName}
              </p>
              <p className="text-xs font-light text-gray-500">
                {userProfile?.email}
              </p>
            </div>
            <Button type="default" className="ml-4" onClick={logout}>
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <Button type="default" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
