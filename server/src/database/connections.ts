import knex from 'knex';
import path from 'path';

//Config to connect to the database
const db = knex({
    client: 'pg',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default db;