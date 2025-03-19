const Hapi = require('@hapi/hapi');
const routes = require('./route');

const init = async () => {
    const server = Hapi.Server({
        port: 8080,
        host: "localhost",
        routes: {
            cors: {
                origin: ["*"]
            }
        },
    });

    server.route(routes);

    server.ext("onPreResponse", (request, h) => {
        const response = request.response;
        if (response.isBoom) {
            return h.response({
                status: "fail",
                message: response.message
            }).code(response.output.statusCode);
        }

        return h.continue;
    });

    await server.start();

    console.log(`listening on ${server.info.uri}`);
}

init();
