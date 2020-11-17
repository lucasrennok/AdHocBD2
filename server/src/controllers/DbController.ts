import {Request, Response} from 'express';
import db from "../database/connections";

export default class DbController{

    async dbSearch(request: Request, response: Response){
        const {table} = request.query;

        const data = await db('game').select('*');

        return response.status(201).json({"hello": data});
    }

    async getAllLeagues(request: Request, response: Response){
        const allLeagues = await db('league').select('nome_liga');
        let result = []
        for(let league of allLeagues){
            result.push(league.nome_liga);
        }
        return response.status(201).json({"error": 0, "ligas": result});
    }
    
    async getAllTeams(request: Request, response: Response){
        const allTeams = await db('team').select('nome_time');
        let result = []
        for(let team of allTeams){
            result.push(team.nome_time);
        }
        return response.status(201).json({"error": 0, "times": result});
    }

    async getAllGames(request: Request, response: Response){
        const allGames = await db('game').select('nome_partida');
        let result = []
        for(let game of allGames){
            result.push(game.nome_partida);
        }
        return response.status(201).json({"error": 0, "jogos": result});
    }

    async getAllPlayers(request: Request, response: Response){
        const allPlayers = await db('player').select('nome_jogador');
        let result = []
        for(let player of allPlayers){
            result.push(player.nome_jogador);
        }
        return response.status(201).json({"error": 0, "jogadores": result});
    }
}