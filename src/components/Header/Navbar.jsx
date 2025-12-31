import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../../assets/user.png'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import logo from '../../assets/website-logo.png'

const Navbar = () => {

    const { user, logOut } = use(AuthContext);

    // handeling log out
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            toast.success('Signed out Successfully..!')
        })
        .catch(error=>{
            toast.error(error)
        })
    }

    const links = <>
        <NavLink className='mx-3 font-semibold' to={'/'}>Home</NavLink>
        <NavLink className='mx-3 font-semibold' to={'/profile'}>My Profile</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                        {links}

                        {
                            user
                                ? <li onClick={handleLogOut} className='mx-3 font-semibold'>LogOut</li>
                                : <>
                                    <NavLink className='mx-3 font-semibold' to={'/login'}>Log In</NavLink>
                                    <NavLink className='mx-3 font-semibold' to={'/register'}>Register</NavLink>
                                </>
                        }

                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-[50px] hidden md:block' src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">Skilled Society</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end gap-2 mr-2 flex justify-end items-center">

                <div className='p-1 rounded-full bg-base-200'>
                    <img className='rounded-full h-[50px] w-[50px] bg-cover' src={`${ 
                        user
                        ? user.photoURL 
                        : userLogo
                        }`} alt="?" />
                </div>

                <div className='hidden md:block'>
                    {
                        user
                            ? <button onClick={handleLogOut} className="btn bg-[#1A77F2] text-white ">LogOut</button>
                            : <>
                                <Link to={'/login'} className="btn btn-neutral ">Login</Link>
                                <Link to={'/register'} className="btn btn-primary ml-2">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;