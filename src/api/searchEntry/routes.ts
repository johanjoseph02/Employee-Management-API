import { NextFunction, Request, Response, Router } from 'express';
import validateSearchMW from '../../middleware/validateSearch';
import searchSchema from './searchSchema';
import config from '../../config';
import supabase from '../../loaders/database';
import Logger from '../../loaders/logger';
import validateRecaptcha from '../../middleware/validateCaptcha';

const searchEntryRoute = Router();

// not using since middleware this route would throw an error
// if token is absent in request body, purely for testing purposes

// addEntryRoute.use(validateRecaptcha);

searchEntryRoute.get(
    '/',
    validateSearchMW(searchSchema),
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            Logger.info("searchEntry: Query validation passed");
            
            const empId = req.query.id;
            const empEmail = req.query.email;

            if(!empId && !empEmail)
            {
                throw '⛔️ No employee details provided'
            }
            else if(!empId)
            {
                Logger.info("EmpSearch Query:"+req.query);
                Logger.info("EmpSearch Query id: "+req.query.id);
                Logger.info("EmpSearch Query email: "+req.query.email);

                const { data: searchEmployee, error: searchEmployeeError } = await supabase()
                .from('employee-data')
                .select('*')
                .eq('email', empEmail);
                if (searchEmployeeError)
                    throw 'SUPABASE: Internal Server Error (0xsearchEmployeeError)';

                if (searchEmployee.length == 0) 
                    throw '⛔️ Employee does not exist';

                res.status(200).json({ success:true, message:"✅ Employee found",  employee:searchEmployee});
                next();
            }
            else if(!empEmail)
            {
                Logger.info("EmpSearch Query:"+req.query);
                Logger.info("EmpSearch Query id: "+req.query.id);
                Logger.info("EmpSearch Query email: "+req.query.email);

                const { data: searchEmployee, error: searchEmployeeError } = await supabase()
                .from('employee-data')
                .select('*')
                .eq('id', empId)
                if (searchEmployeeError)
                    throw 'SUPABASE: Internal Server Error (0xsearchEmployeeError)';

                if (searchEmployee.length == 0) 
                    throw '⛔️ Employee does not exist';

                res.status(200).json({ success:true, message:"✅ Employee found",  employee:searchEmployee});
                next();
            }
            else
            {
                Logger.info("EmpSearch Query:"+req.query);
                Logger.info("EmpSearch Query id: "+req.query.id);
                Logger.info("EmpSearch Query email: "+req.query.email);

                const { data: searchEmployee, error: searchEmployeeError } = await supabase()
                .from('employee-data')
                .select('*')
                .eq('id', empId)
                .eq('email', empEmail)
                if (searchEmployeeError)
                    throw 'SUPABASE: Internal Server Error (0xsearchEmployeeError)';

                if (searchEmployee.length == 0) 
                    throw '⛔️ Employee does not exist';

                res.status(200).json({ success:true, message:"✅ Employee found",  employee:searchEmployee});
                next();
            }
            
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

export default searchEntryRoute;

