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
export declare const config: Config;
export {};
//# sourceMappingURL=config.d.ts.map