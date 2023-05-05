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
    `;
    return (
        <header className="grid grid-cols-2 px-2 py-6">
            <div className="flex gap-10 items-center">
                <span className="text-blue-500 text-2xl font-bold">MORENT</span>
                <div className="w-full border border-gray-300 rounded-full flex items-center justify-center gap-3 px-4 py-2 text-gray-600">
                    <SearchNormal1 size="20" />
                    <input
                        className="outline-none w-full placeholder:text-sm placeholder:text-gray-600"
                        placeholder="Search something here"
                    />
                </div>
            </div>
            <div className="profile flex items-center gap-4 justify-end">
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