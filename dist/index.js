import "dotenv/config";
import os from 'os';
import cluster from 'cluster';
import express from "express";
import logger from "./config/pino.config.js";
import { helmetConfig } from "./config/helmet.config.js";
import { corsConfig } from "./config/cors.config.js";
import limiter from "./config/rateLimit.config.js";
import { cookieConfig } from "./config/cookieParser.config.js";
import { compressionConfig } from "./config/compression.config.js";
import router from "./routers/index.router.js";
import pathHandler from "./middlewares/pathHandler.middleware.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import { prisma } from "./config/db.config.js";
import path from "path";
const { PORT: port, MAX_REQUEST_SIZE: maxRequestSize, NODE_ENV: nodeEnv } = process.env;
const app = express();
app.use(express.json({
    limit: maxRequestSize,
    verify: (req, res, buf) => {
        req.rawBody = buf;
    }
}));
app.use(express.urlencoded({
    extended: true,
    limit: maxRequestSize,
}));
// app.use(compressionConfig);
// secure backend
// app.use(helmetConfig);
// app.use(corsConfig);
// app.disable("x-powered-by");
// app.use(limiter);
// app.set("trust proxy", 1);
app.use(cookieConfig);
app.get('/', (req, res) => {
    res.send("server is running...");
})
app.get("/health", (req, res) => {
    res.send("server is healthy...");
})
app.use("/api/v1", router);
app.use(pathHandler);
app.use(errorHandler);
if (nodeEnv === "production") {
    const CPUs = os.cpus().length;
    if (cluster.isPrimary) {
        for (let i = 0; i < CPUs; i++) {
            cluster.fork();
        }
        cluster.on("exit", (worker) => {
            logger.info(`Worker ${worker.id} died`);
            cluster.fork();
        });
    }
    else {
        app.listen(port, () => {
            logger.info(`Worker running on port ${port}`);
        });
    }
}
else {
    app.listen(port || 8080, () => {
        logger.info(`Server running on port ${port}`);
    });
    prisma.$connect().then(() => {
        logger.info("Database connected");
    }).catch((error) => {
        logger.error("Error connecting to database: ", error);
    });
}
