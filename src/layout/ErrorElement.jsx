import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column vh-100">
      <h1>Unexpected Application Error!</h1>
      <h2>404 Not Found</h2>
      <Link to="/" className="btn btn-primary h6 text-white">
        Homepage
      </Link>
    </div>
  );
};

export default ErrorElement;
