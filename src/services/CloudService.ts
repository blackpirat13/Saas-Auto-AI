import { alert } from "@nativescript/core";

export interface CloudResource {
    id: string;
    name: string;
    type: string;
    status: string;
    usage: number;
    cost: number;
}

export class CloudService {
    private static instance: CloudService;
    private resources: CloudResource[] = [
        {
            id: "1",
            name: "Web Server",
            type: "EC2",
            status: "running",
            usage: 75,
            cost: 0.05
        },
        {
            id: "2",
            name: "Database",
            type: "RDS",
            status: "running",
            usage: 45,
            cost: 0.08
        },
        {
            id: "3",
            name: "Storage",
            type: "S3",
            status: "active",
            usage: 60,
            cost: 0.02
        }
    ];

    static getInstance(): CloudService {
        if (!CloudService.instance) {
            CloudService.instance = new CloudService();
        }
        return CloudService.instance;
    }

    getResources(): CloudResource[] {
        return this.resources;
    }

    optimizeResource(id: string): void {
        const resource = this.resources.find(r => r.id === id);
        if (resource) {
            resource.usage = Math.max(resource.usage - 20, 0);
            alert({
                title: "Resource Optimized",
                message: `${resource.name} has been optimized. New usage: ${resource.usage}%`,
                okButtonText: "OK"
            });
        }
    }
}