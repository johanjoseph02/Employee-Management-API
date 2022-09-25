import { NextFunction, Request, Response, Router } from 'express';
import validateAddMW from '../../middleware/validateAdd';
import addSchema from './addSchema';
import config from '../../config';
import supabase from '../../loaders/database';
import Logger from '../../loaders/logger';
import { nanoid } from 'nanoid';
import validateRecaptcha from '../../middleware/validateCaptcha';

const addEntryRoute = Router();

// not using since middleware this route would throw an error
// if token is absent in request body, purely for testing purposes

// addEntryRoute.use(validateRecaptcha);

addEntryRoute.post(
    '/',
    validateAddMW(addSchema),
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            Logger.info("AddEntry: Schema validation passed");

            const { data: existEmployee, error: existEmployeeError } = await supabase()
            .from('employee-data')
            .select('email')
            .eq('email', req.body.email);
            if (existEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xexistEmployeeError)';

            if (existEmployee.length) 
               throw '⛔️ Employee already exists';

            const newId = nanoid(24).toString();
            const { data: addEmployee, error: addEmployeeError } = await supabase()
            .from('employee-data')
            .upsert([
            {
                id: newId,
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.phone
            },
            ]);
            if (addEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xaddEmplyeeError)';

            res.status(200).json({ success:true, message:"✅ Employee registered Successfully" });
            next();
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

export default addEntryRoute;

