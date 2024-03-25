import { Outlet } from "react-router-dom";
import About from "../Components/About";
import Community from "../Components/Community";
import ListedBooks from "../Components/ListedBooks";
import Navbar from "../Components/Navbar";
import Read from "../Components/Read";
import Home from "../Pages/Home";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Home></Home>
            <ListedBooks></ListedBooks>
            <Read></Read>
            <About></About>
            <Community></Community> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;