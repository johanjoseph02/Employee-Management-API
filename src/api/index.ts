import { Router } from 'express';
import addEntryRoute from './addEntry/routes';

export default (): Router => {
    const app = Router();

    app.use('/add-employee', addEntryRoute);

    return app;
};