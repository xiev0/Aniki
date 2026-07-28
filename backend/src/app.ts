import Fastify from "fastify";
import { routes } from "./routes/routes";

export const buildApp = () => {
    const app = Fastify();

    app.register(routes);

    return app;
};