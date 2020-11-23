export let map = new Map();
map.set('league', ['id_liga', 'nome_liga', 'nome_alternativo_liga', 'ano_formacao_liga', 'pais_liga', 'descricao']);
map.set('team', ['id_time', 'nome_time', 'ano_formacao_time', 'estadio_time', 'pais_time', 'liga_time'])
map.set('player', ['id_jogador', 'id_time_jogador', 'nome_jogador', 'nacionalidade_jogador', 'data_nasc_jogador', 'genero_jogador', 'altura_jogador', 'peso_jogador'])
map.set('game', ['id_partida', 'nome_partida', 'data_partida', 'local_partida', 'time_casa', 'time_visitante', 'pontos_time_casa', 'pontostime', 'hora_partida'])