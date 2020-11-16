import express from 'express';
import DbController from './controllers/DbController';

const routes = express.Router();
const dbController = new DbController();

//Here are the routes that can be accessed
routes.get('/select', dbController.dbSearch);

export default routes;
