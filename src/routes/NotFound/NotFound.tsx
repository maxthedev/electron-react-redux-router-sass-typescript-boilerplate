import {useRouteError, isRouteErrorResponse, Link} from "react-router-dom";

export const NotFound = () => {
    const error = useRouteError();
    if(isRouteErrorResponse(error))
        return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.data.message}</i>
            </p>
            <Link to={"/"}>Back to Home</Link>
        </div>
    )
    else
        return <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to={"/"}>Back to Home</Link>
        </div>;
}

export default NotFound