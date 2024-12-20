import compression from "compression";
export const compressionConfig = compression({
    level: 6,
    threshold: 10 * 1024,
    filter: function (req, res) {
        if (req.headers["x-no-compression"]) {
            return false;
        }
        const compressibleTypes = /json|text|javascript|css|xml|font|svg/i;
        const contentType = res.getHeader('content-type');
        if (!contentType) {
            return false;
        }
        return compressibleTypes.test(contentType.toString());
    }
});
