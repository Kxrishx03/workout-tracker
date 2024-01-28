import { Link } from "react-router-dom";

export function Navbar(){
    return (
       <header>
         <div className="container">
            <Link to="/">
                <h1>Workout Tracker</h1>
            </Link>
            <div className="login-signup-button">
            <Link to="/login">
                <h1>Login</h1>
            </Link>
            <Link to="/Signup">
                <h1>Signup</h1>
            </Link>
            </div>
        </div>
       </header>
    );
}