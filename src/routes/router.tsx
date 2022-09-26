import Root from './Root/Root'
import {createHashRouter} from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import Pokemons from "./Pokemons";
import OutOfTheLayout from "../components/OutOfTheLayout";
import routes from "./routes";
import Counter from "../components/Counter";
import EditCounter from "../components/EditCounter";

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound/>,
        children: [
            {
                path: routes.APP,
                element: <App />,
            },
            {
                path: routes.POKEMONS,
                element: <Pokemons />,
            },
            {
                path:routes.COUNTER,
                element:<Counter/>
            },
            {
                path:routes.EDIT_COUNTER,
                element:<EditCounter/>
            }
        ],
    },
    {
        path:routes.SOMETHING_OUT_OF_THE_LAYOUT,
        element:<OutOfTheLayout/>
    },
]);

export default router;