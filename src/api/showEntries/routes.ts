import { NextFunction, Request, Response, Router } from 'express';
import config from '../../config';
import supabase from '../../loaders/database';
import Logger from '../../loaders/logger';

const showEntriesRoute = Router();

showEntriesRoute.get(
    '/',
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            const { data: allEmployee, error: allEmployeeError } = await supabase()
            .from('employee-data')
            .select('*')
            if (allEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xexistEmployeeError)';

            if (allEmployee.length == 0) 
               throw '⛔️ No Employees, Database empty';

            res.status(200).json({ success:true, message:"✅ Employees Gathered Successfully", employees:allEmployee });
            next();
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

export default showEntriesRoute;