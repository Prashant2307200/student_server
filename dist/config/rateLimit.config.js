import rateLimit from "express-rate-limit";
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
    message: 'Too many requests from this IP, please try again later',
    skip: (req) => {
        if (req.path === '/api/health')
            return true;
        return false;
    }
});
export default limiter;
