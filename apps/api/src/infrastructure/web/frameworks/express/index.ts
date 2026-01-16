import express from 'express';
import userRoutes from './routes/v1/users/UserRoutes';
import { WebFramework } from '../../interfaces/WebFramework';

export class Express implements WebFramework {
    private app: express.Application;

    constructor() {
        this.app = express();
    }

    setUpRoutes() {
        this.app.use('/v1/users', userRoutes);
    }

    start(port: number) {
        this.setUpRoutes();
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}
