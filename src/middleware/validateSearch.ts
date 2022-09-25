import Logger from  '../loaders/logger';
import * as yup from 'yup';

const validateSearchMW = (searchSchema) => async (req, res, next) => {
    const resource = req.query;
    try 
    {
      await searchSchema.validate(resource);
      next();
    } 
    catch (err) 
    {
      Logger.error(err)
      res.status(400).json({ error: err.errors.join(', ') });
    }
  };
  
  export default validateSearchMW;