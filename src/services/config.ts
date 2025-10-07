const dotenv = require("dotenv");

dotenv.config();

interface AppConfig {
    port: number | string;
}

interface DbConfig {
    client: "mssql";
    connection: {
        host: string;
        user: string;
        password: string;
        database: string;
        options: {
            encrypt: boolean;
            enableArithAbort: boolean;
        };
    };
    pool: {
        min: number;
        max: number;
    };
}

interface Config {
    app: AppConfig;
    db: DbConfig;
}

export const config: Config = {
    app: {
        port: process.env.PORT || 5000,
    },
    db: {
        client: "mssql",
        connection: {
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "sa",
            password: process.env.DB_PASSWORD || "your_password",
            database: process.env.DB_NAME || "SalesDB",
            options: {
                encrypt: false, // ใช้ Azure ให้ true
                enableArithAbort: true,
            },
        },
        pool: { min: 2, max: 10 },
    },
};

module.exports = { config };
