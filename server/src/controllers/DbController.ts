import {Request, Response} from 'express';
import db from "../database/connections";

export default class DbController{

    async dbSearch(request: Request, response: Response){
        const {} = request.query;

        return response.status(201).json({"hello": "world"});
    }

}