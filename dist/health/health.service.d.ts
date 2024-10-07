import { Connection } from 'typeorm';
export declare class HealthService {
    private readonly connection;
    constructor(connection: Connection);
    checkDatabaseConnection(): Promise<{
        status: string;
        error?: undefined;
    } | {
        status: string;
        error: any;
    }>;
}
