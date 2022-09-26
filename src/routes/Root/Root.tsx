import {Link, Outlet} from "react-router-dom";
import routes from "../routes";

export const Root = () => {
    return (
        <>
            <div id="sidebar">
                <h1>React Router</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`contacts/1`}>Not exist</Link>
                        </li>
                        <li>
                            <Link to={routes.APP}>Route to App</Link>
                        </li>
                        <li>
                            <Link to={routes.POKEMONS}>Route to Pokemons</Link>
                        </li>
                        <li>
                            <Link to={routes.SOMETHING_OUT_OF_THE_LAYOUT}>Route to a component out of the layout</Link>
                        </li>
                        <li>
                            <Link to={routes.COUNTER}>Route to a counter</Link>
                        </li>
                        <li>
                            <Link to={routes.EDIT_COUNTER}>Route to the counter editor</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default Root