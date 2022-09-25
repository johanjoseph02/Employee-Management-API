import { NextFunction, Request, Response, Router } from 'express';
import validateUpdateMW from '../../middleware/validateUpdate';
import updateSchema from './updateSchema';
import config from '../../config';
import supabase from '../../loaders/database';
import Logger from '../../loaders/logger';
import validateRecaptcha from '../../middleware/validateCaptcha';

const updateEntryRoute = Router();

// not using since middleware this route would throw an error
// if token is absent in request body, purely for testing purposes

// addEntryRoute.use(validateRecaptcha);

updateEntryRoute.put(
    '/id/:idpa',
    validateUpdateMW(updateSchema),
    async(req:Request, res:Response, next:NextFunction) => {
        try
        {
            Logger.info("UpdateEntry: Schema validation passed");

            const empId = req.params.idpa;

            let empName = req.body.name;
            let empEmail = req.body.email;
            let empAge = req.body.age;
            let empGender = req.body.gender;
            let empPhone = req.body.phone;

            const { data: existEmployee, error: existEmployeeError } = await supabase()
            .from('employee-data')
            .select('*')
            .eq('id', empId);
            if (existEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xexistEmployeeError)';

            if (existEmployee.length == 0) 
               throw '⛔️ Employee ID does not exist';
            

            if(!empName) empName = existEmployee[0].name;
            if(!empEmail) empEmail = existEmployee[0].email;
            if(!empAge) empAge = existEmployee[0].age;
            if(!empGender) empGender = existEmployee[0].gender;
            if(!empPhone) empPhone = existEmployee[0].phone;

            const updateFields = {
                "name": empName,
                "email": empEmail,
                "age": empAge,
                "gender": empGender,
                "phone": empPhone 
            }

            const { data: updateEmployee, error: updateEmployeeError } = await supabase()
            .from('employee-data')
            .update(updateFields)
            .match({ id: empId });
            if (updateEmployeeError) 
                throw 'SUPABASE: Internal Server Error (0xdelEmplyeeError)';

            res.status(200).json({ success:true, message:"✅ Employee Details Updated Successfully", employee:updateEmployee });
            next();
        }
        catch(err)
        {
            Logger.error(err);
            res.status(409).json({ success:false, message:err });
        }
    }
)

export default updateEntryRoute;

