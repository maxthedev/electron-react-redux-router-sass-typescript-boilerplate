import {Link} from "react-router-dom"

const OutOfTheLayout = () => {
    return (
        <div>
            <p>This component is out of the layout 🤷🏻‍</p>
            <Link to={'/'}>But you can back to the home if you want</Link>
        </div>
    );
};

export default OutOfTheLayout;