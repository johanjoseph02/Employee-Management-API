import { Router } from 'express';
import addEntryRoute from './addEntry/routes';
import delEntryRoute from './deleteEntry/routes';

export default (): Router => {
    const app = Router();

    app.use('/add-employee', addEntryRoute);
    app.use('/delete-employee', delEntryRoute);

    return app;
};