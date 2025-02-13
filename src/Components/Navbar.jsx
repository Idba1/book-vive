import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A]' : 'text-black'}
                            to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/listedbooks"}>Listed Books</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/read"}>Pages to Read</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/about"}>About Vive</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/community"}>Community</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-base font-bold lg:text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A]' : 'text-black'}
                            to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/listedbooks"}>Listed Books</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/read"}>Pages to Read</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/about"}>About Vive</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A]' : 'text-black'} to={"/community"}>Community</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3">
                    <a className="btn text-base lg:font-bold">Sign In</a>
                    <a className="lg:btn hidden lg:text-base lg:font-bold">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;