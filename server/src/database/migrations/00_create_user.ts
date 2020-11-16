import Knex from 'knex';

//Create a 'user' table
export async function up(knex: Knex){
    return knex.schema.createTable('user', table => {
        table.string('username').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    });
}

//Drop table when something gone wrong
export async function down(knex: Knex){
    return knex.schema.dropTable('user');
}
