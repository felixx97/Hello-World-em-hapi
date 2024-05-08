'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.Server({
        host: 'localhost',
        port: 3000  // Alterado para uma porta mais comum
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "<h1>Hello World</h1>";
        }
    });

    try {
        await server.start();
        console.log(`Server started at: ${server.info.uri}`);
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
        process.exit(1);
    }
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
