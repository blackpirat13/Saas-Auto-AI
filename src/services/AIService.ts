import { alert } from "@nativescript/core";

export interface AIModel {
    id: string;
    name: string;
    provider: string;
    status: string;
    type: string;
}

export class AIService {
    private static instance: AIService;
    private models: AIModel[] = [
        {
            id: "1",
            name: "GPT-4",
            provider: "OpenAI",
            status: "active",
            type: "Language Model"
        },
        {
            id: "2",
            name: "Watson NLP",
            provider: "IBM",
            status: "inactive",
            type: "Natural Language Processing"
        },
        {
            id: "3",
            name: "Vision AI",
            provider: "Google Cloud",
            status: "active",
            type: "Computer Vision"
        }
    ];

    static getInstance(): AIService {
        if (!AIService.instance) {
            AIService.instance = new AIService();
        }
        return AIService.instance;
    }

    getModels(): AIModel[] {
        return this.models;
    }

    toggleModel(id: string): void {
        const model = this.models.find(m => m.id === id);
        if (model) {
            model.status = model.status === "active" ? "inactive" : "active";
            alert({
                title: "Model Status Updated",
                message: `${model.name} is now ${model.status}`,
                okButtonText: "OK"
            });
        }
    }
}