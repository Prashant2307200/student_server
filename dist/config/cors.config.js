import cors from "cors";
export const corsConfig = cors({
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST"],
    credentials: true,
});
