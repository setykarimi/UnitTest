import { SearchNormal1, Heart, Notification, Setting2 } from "iconsax-react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const ProfileLinks = styled(Link)`
        color: #596780;
        border: 1px solid #e5e7eb;
        width: 2.5em;
        height: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        &:hover {
            border: 2px solid #e5e7eb
          }
          @media (max-width:576px) {
            display: none;
          }
    `;
    return (
        <header className="md:grid lg:grid-cols-2 md:grid-cols-3 gap-2 md:px-2 px-6 py-6 sticky top-0">
            <div className="flex md:flex-row flex-col md:gap-10 gap-6 md:items-center lg:col-span-1 md:col-span-2 col-span-1">
                <span className="text-blue-500 text-2xl font-bold text-left">MORENT</span>
                <div className="w-full border border-gray-300 md:rounded-full rounded-lg flex items-center justify-center gap-3 px-4 py-2 text-gray-600 md:relative">
                    <SearchNormal1 size="20" />
                    <input
                        className="outline-none w-full placeholder:text-sm placeholder:text-gray-600"
                        placeholder="Search something here"
                    />
                </div>
            </div>
            <div className="profile flex items-center gap-4 justify-end md:static absolute top-4 right-3">
                <ProfileLinks to="/">
                    <Heart size="20" variant="Bold" />
                </ProfileLinks>
                <ProfileLinks to="/">
                    <Notification size="20" variant="Bold" />
                </ProfileLinks>
                <ProfileLinks to="/">
                    <Setting2 size="20" variant="Bold" />
                </ProfileLinks>
                <Link className="rounded-full h-10 w-10 p-2 flex items-center justify-center" to='/'>
                    Me
                </Link>
            </div>
        </header>
    );
}

export default Navbar;