https://kostasbariotis.com/data-migration-with-nodejs/

Models:
defines what is a legal/valid insert into a specific database table. All row inserts flow through a model to determine validity.

Migrations:
Used to make changes to data schema or bulk insert rows
up: function to do migration
down: function to rollback change
