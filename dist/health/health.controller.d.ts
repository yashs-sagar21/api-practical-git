import { HealthService } from './health.service';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    checkHealth(): Promise<{
        status: string;
        error?: undefined;
    } | {
        status: string;
        error: any;
    }>;
}
