import { Link } from "react-router";
import { ModeToggle } from "../mood_toggle";

export default function Navbar(){
    return(
        <nav className="max-w-7xl mx-auto h-16 justify-between flex items-center gap-3 px-5">
          <div className="flex items-center">
         <h1>Logo</h1>
         <span className="font-bold ml-2">TaskOne</span>
          </div>
          <div>
            <Link to="">Tasks</Link>
            <Link to="/user">Users</Link>
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </nav>
    )
}