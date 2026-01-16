import { WebFramework } from './interfaces/WebFramework';

export class Server {
    private port: number;
    private webFramework: WebFramework;

    constructor(port: number, webFramework: WebFramework) {
        this.port = port;
        this.webFramework = webFramework;
    }

    start() {
        this.webFramework.start(this.port);
    }
}
