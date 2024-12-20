import logger from "../config/pino.config.js";
const errorHandler = (err, req, res, next) => {
    const { status = 500, message = "Internal Server Error" } = err;
    logger.error(`Express Error with ${status} and ${message}`);
    res.status(status).json({ message });
};
export default errorHandler;
