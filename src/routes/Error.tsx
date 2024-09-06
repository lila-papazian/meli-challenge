import { ErrorResponse, useRouteError } from "react-router-dom";
import "./errorScreen.scss";
const Error = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className='error-screen'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data ?? "No error message available."}</i>
      </p>
      <a href="/">Go Home?</a>
    </div>
  );
};

export default Error;
