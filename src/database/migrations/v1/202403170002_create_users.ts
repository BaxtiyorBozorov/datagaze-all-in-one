import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.uuid('role_id').references('id').inTable('roles').onDelete('SET NULL');
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
