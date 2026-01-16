import { Express } from './infrastructure/web/frameworks/express';
import { Server } from './infrastructure/web/server';

const main = () => {
    const express = new Express();
    const server = new Server(3000, express);
    server.start();
};

main();
