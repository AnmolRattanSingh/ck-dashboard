import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useStateContext } from '../contexts/ContextProvider';
import { Button } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';

const UserProfile = () => {
  const { userProfile, setUserProfile, currentColor } = useStateContext();

  const logout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-96 shadow">
      <div className="flex justify-evenly">
        {
          userProfile?.photoURL ? (
            <img
              src={userProfile?.photoURL}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <AiOutlineUser size={30} />
          )
        }
        <div>
          <p className="text-sm font-medium text-gray-800 dark:text-white">
            {userProfile?.displayName}
          </p>
          <p className="text-xs font-light text-gray-500">
            {userProfile?.email}
          </p>
        </div>
        <Button type="default" onClick={logout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
