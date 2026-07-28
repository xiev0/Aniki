import { Pool } from 'pg'

const pool = new Pool({
    host: 'localhost',      // где живёт PostgreSQL?
    database: 'Aniki',  // какая база?
    user: 'postgres',      // под каким пользователем входили в psql?
    port: 5432         // порт PostgreSQL
})
export default pool