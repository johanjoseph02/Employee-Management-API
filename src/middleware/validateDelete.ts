import Logger from  '../loaders/logger';
import * as yup from 'yup';

const validateDeleteMW = (addSchema) => async (req, res, next) => {
    const resource = req.body;
    try 
    {
      await addSchema.validate(resource);
      next();
    } 
    catch (err) 
    {
      Logger.error(err)
      res.status(400).json({ error: err.errors.join(', ') });
    }
  };
  
  export default validateDeleteMW;