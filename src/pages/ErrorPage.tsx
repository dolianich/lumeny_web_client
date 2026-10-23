import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.status} {error.statusText}
      </div>
    );
  }

  return <div>Something went wrong</div>;
};

export default ErrorPage;
