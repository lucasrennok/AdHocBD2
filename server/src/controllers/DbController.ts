import {Request, Response} from 'express';
import db from "../database/connections";

export default class DbController{

    async dbSearch(request: Request, response: Response){
        const {table} = request.query;

        const data = await db('game').select('*');

        return response.status(201).json({"hello": data});
    }

    async getAllData(request: Request, response: Response){
        let {liga,time,jogador,jogo} = request.query;
        let allLeagues,allTeams,allPlayers,allGames;
        
        // http://localhost:3333/all?liga=Todas%20as%20ligas&time=Todos%20os%20times
        if(liga === undefined || liga === ''){
            liga = "Todas as ligas";
        }
        if(time === undefined || time === ''){
            time = "Todos os times";
        }


        allLeagues = await db('league').select('*');
        if(liga!=='Todas as ligas'){
            let allLeaguesAux = await db('league')
                .select('*')
                .where('nome_liga', '=', liga as string);

            allTeams = await db('team').select('*')
                .where('liga_time','=',allLeaguesAux[0].id_liga);

            if(time!=='Todos os times'){
                allPlayers = await db('player').select('*')
                    .where('id_time','=',allTeams[0].id_time);

                allGames = await db('game').select('*')
                    .where('time_visitante','=',allTeams[0].id_time)
                    .orWhere('time_casa','=',allTeams[0].id_time);
            }else{
                allPlayers = await db('player').select('*')

                allGames = await db('game').select('*');
            }
        }else{
            allTeams = await db('team').select('*');

            if(time!=='Todos os times'){
                allPlayers = await db('player').select('*')
                    .where('id_time','=',allTeams[0].id_time);
                    
                allGames = await db('game').select('*')
                    .where('time_visitante','=',allTeams[0].id_time)
                    .orWhere('time_casa','=',allTeams[0].id_time);
            }else{
                allPlayers = await db('player').select('*');
                allGames = await db('game').select('*');
            }
        }
        for(let i in allLeagues){
            allLeagues[i] = allLeagues[i].nome_liga
        }
        for(let i in allTeams){
            allTeams[i] = allTeams[i].nome_time
        }
        for(let i in allPlayers){
            allPlayers[i] = allPlayers[i].nome_jogador
        }
        for(let i in allGames){
            allGames[i] = allGames[i].nome_partida
        }

        return response.status(201).json({"erro": 0, ligas: allLeagues, times: allTeams, jogadores: allPlayers, jogos: allGames});
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