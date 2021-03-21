import { Client } from 'https://deno.land/x/postgres/mod.ts';


class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client({
            user: 'username',
            database: 'logrocket_deno',
            hostname: 'dev.cuobad7fvyvp.us-west-2.rds.amazonaws.com',
            password: 'password',
            port: 5432,
        });

        await this.client.connect();
    }
}

export default new Database().client;
