import ExpressError from "../utils/ExpressError.util.js";
const pathHandler = (req, res, next) => {
    next(new ExpressError("Page not Found!", 404));
};
export default pathHandler;
