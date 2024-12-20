import cookieParser from "cookie-parser";
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    signed: true,
    maxAge: 24 * 60 * 60 * 1000,
};
export const cookieConfig = cookieParser(process.env.COOKIE_SECRET || "cookie-secret", cookieOptions);
