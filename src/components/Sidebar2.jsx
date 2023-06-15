import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { GiMountedKnight } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'
import { Tooltip } from 'antd'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const Sidebar = () => {

    const { activeMenu, setActiveMenu, screenSize } = useStateContext()

    const handleCloseSidebar = () => {
        if (activeMenu < screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    const items = links.map((item) => {
        const children = item.links.map((link) => (
            <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSidebar}
            >
                {link.icon}
                <span className="capitalize">
                    {link.name}
                </span>
            </NavLink>
        ));
        return getItem(item.title, item.title, item.icon, children, 'submenu');
    });

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {
                activeMenu && (<>
                    <Menu
                        onClick={handleCloseSidebar}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </>
                )}
        </div>
    );
}
export default Sidebar;
