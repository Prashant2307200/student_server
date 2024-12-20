import helmet from "helmet";
export const helmetConfig = helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "https://cdn.tailwindcss.com"],
            "style-src": ["'self'", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"],
        },
    },
});
