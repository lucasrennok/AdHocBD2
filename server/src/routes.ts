import express from 'express';
import DbController from './controllers/DbController';

const routes = express.Router();
const dbController = new DbController();

//Here are the routes that can be accessed
routes.post('/', dbController.dbSearch);
routes.get('/ligas', dbController.getAllLeagues);
routes.get('/times', dbController.getAllTeams);
routes.get('/jogadores', dbController.getAllPlayers);
routes.get('/jogos', dbController.getAllGames);
routes.get('/all', dbController.getAllData);

export default routes;
