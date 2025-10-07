const dotenv = require("dotenv");
dotenv.config();
export const config = {
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
//# sourceMappingURL=config.js.map