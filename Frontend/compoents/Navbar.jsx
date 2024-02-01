import { Link } from "react-router-dom";
import { UseLogout } from "../hooks/Uselogout";
import { UseAuthContext } from "../hooks/Useauthcontext";

export function Navbar(){
    const { logout } = UseLogout();
    const { user } = UseAuthContext();
    function ClickHandler(){
              logout();
    }
    return (
       <header>
         <div className="container">
            <Link to="/">
                <h1>Workout Tracker</h1>
            </Link>
            <div>
              { user && (
            <div className="logout-btn">
            <span className="username">{user.username}</span>
            <button onClick={ClickHandler}>LOGOUT</button></div>
              )}
            { !user && (
                <div className="login-signup-button">
                <Link to="/login">
                <h1>Login</h1>
            </Link>
            <Link to="/Signup">
                <h1>Signup</h1>
            </Link>
                </div>
            )}
            </div>
        </div>
       </header>
    );
}