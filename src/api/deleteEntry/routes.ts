import { NextFunction, Request, Response, Router } from 'express';
import validateDeleteMW from '../../middleware/validateDelete';
import { deleteEmailSchema, deleteIdSchema } from './deleteSchema'
import config from '../../config';
import supabase from '../../loaders/database';
import Logger from '../../loaders/logger';

const delEntryRoute = Router();

delEntryRoute.post(
    '/id',
    validateDeleteMW(deleteIdSchema),
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            Logger.info("DelEntry ID: Schema validation passed");

            const empId = req.body.id;

            const { data: existEmployee, error: existEmployeeError } = await supabase()
            .from('employee-data')
            .select('id')
            .eq('id', empId);
            if (existEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xexistEmployeeError)';

            if (existEmployee.length == 0) 
               throw '⛔️ Employee ID does not exist';

            const { data: delEmployee, error: delEmployeeError } = await supabase()
            .from('employee-data')
            .delete()
            .match({ id: empId });
            if (delEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xdelEmplyeeError)';

            res.status(200).json({ success:true, message:"✅ Employee Deleted Successfully", employee:delEmployee });
            next();
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

delEntryRoute.post(
    '/email',
    validateDeleteMW(deleteEmailSchema),
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            Logger.info("DelEntry Email: Schema validation passed");

            const empEmail = req.body.email;

            const { data: existEmployee, error: existEmployeeError } = await supabase()
            .from('employee-data')
            .select('email')
            .eq('email', empEmail);
            if (existEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xexistEmployeeError)';

            if (existEmployee.length == 0) 
               throw '⛔️ Employee Email does not exist';

            const { data: delEmployee, error: delEmployeeError } = await supabase()
            .from('employee-data')
            .delete()
            .match({ email: empEmail });
            if (delEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xdelEmplyeeError)';

            res.status(200).json({ success:true, message:"✅ Employee Deleted Successfully", employee:delEmployee });
            next();
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

export default delEntryRoute;

