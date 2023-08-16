import { Link } from "react-router-dom";
import Logout from "./Logout";
function Greet() {
    const username = localStorage.getItem("username");
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <div style={{ position: 'absolute', top: '10px', right: '100px' }}>
                    <Link to="/time" className="btn btn-primary btn-sm">Submit Time</Link>
                    <span style={{ margin: '0 5px' }}></span>
                    <Logout></Logout>
                </div>
                <h1>Welcome {username !== null ? username.toUpperCase() : 'Guest'}</h1>
            </div>
        </div>

    );

}

export default Greet;