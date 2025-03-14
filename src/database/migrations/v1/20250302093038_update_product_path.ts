import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('products', table => {
    table.specificType('path' , 'json').nullable().defaultTo(null).alter();
  });
}




export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('products', table => {
    table.string('path').nullable().defaultTo(null).alter()
  })
}

