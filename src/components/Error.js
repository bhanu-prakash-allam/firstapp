
const ErrorComp = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h3>
                Server Down, please try again later...
                <i className="fa fa-exclamation-circle fa-spin" style={{ marginRight: '10px' }}></i>
            </h3>
        </div>
    );
}
export default ErrorComp;