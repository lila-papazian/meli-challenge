import { useRouteError } from "react-router-dom";
import "./errorScreen.scss"
const Error = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="error-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.name || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
