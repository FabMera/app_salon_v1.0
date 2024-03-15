import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
                Not Found Page ...
            </h1>
            <p className="text-center">Hubo un error..</p>
            <p className="text-center">{error.message}</p>
        </div>
    );
};

export default NotFound;
