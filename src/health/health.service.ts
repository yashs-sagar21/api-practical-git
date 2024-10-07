import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class HealthService {
    constructor(@InjectConnection() private readonly connection: Connection) { }

    async checkDatabaseConnection() {
        try {
            await this.connection.query('SELECT 1'); // Simple query to check connection
            return { status: 'Database connection is healthy' };
        } catch (error) {
            return { status: 'Database connection failed', error: error.message };
        }
    }
}
