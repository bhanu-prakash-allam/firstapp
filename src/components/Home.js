import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1>Welcome to TMS</h1>
                <p>Your Trusted Management System</p>
                <div className="mt-4">
                    <Link to='/register' className="btn btn-primary mx-2"> Register </Link>
                    <Link to='/login' className="btn btn-primary mx-2"> Login </Link>
                </div>
            </div>
        </div>
    );
}
export default Home;