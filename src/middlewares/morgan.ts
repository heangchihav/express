import morgan, { StreamOptions } from "morgan";
import Logger from '../config/logs'
import { NODE_ENV } from "../config/secret";

const stream: StreamOptions = {
    write: (message) => Logger.http(message)
};

const skip = () => {
    return NODE_ENV !== "development";
};

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;