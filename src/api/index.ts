import { Router } from 'express';
import addEntryRoute from './addEntry/routes';
import delEntryRoute from './deleteEntry/routes';
import searchEntryRoute from './searchEntry/routes';

export default (): Router => {
    const app = Router();

    app.use('/add-employee', addEntryRoute);
    app.use('/delete-employee', delEntryRoute);
    app.use('/search-employee', searchEntryRoute);

    return app;
};