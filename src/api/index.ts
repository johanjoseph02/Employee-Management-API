import { Router } from 'express';
import addEntryRoute from './addEntry/routes';
import delEntryRoute from './deleteEntry/routes';
import searchEntryRoute from './searchEntry/routes';
import showEntriesRoute from './showEntries/routes';
import updateEntryRoute from './updateEntry/routes';

export default (): Router => {
    const app = Router();

    app.use('/add-employee', addEntryRoute);
    app.use('/delete-employee', delEntryRoute);
    app.use('/search-employee', searchEntryRoute);
    app.use('/show-employees', showEntriesRoute);
    app.use('/update-employee', updateEntryRoute);

    return app;
};