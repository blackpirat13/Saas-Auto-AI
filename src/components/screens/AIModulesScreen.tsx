import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { AIService, AIModel } from "../../services/AIService";

type AIModulesScreenProps = {
    navigation: FrameNavigationProp<any, "AIModules">,
};

const ModelCard = ({ model, onToggle }: { model: AIModel; onToggle: () => void }) => (
    <stackLayout className="card">
        <gridLayout columns="*, auto">
            <stackLayout col="0">
                <label className="text-xl font-bold text-light">{model.name}</label>
                <label className="text-light opacity-70">{model.provider}</label>
                <label className="text-primary">{model.type}</label>
            </stackLayout>
            <button 
                col="1" 
                className={`btn-primary ${model.status === 'inactive' ? 'opacity-50' : ''}`}
                text={model.status === 'active' ? 'Disable' : 'Enable'}
                onTap={onToggle}
            />
        </gridLayout>
    </stackLayout>
);

export function AIModulesScreen({ navigation }: AIModulesScreenProps) {
    const aiService = React.useMemo(() => AIService.getInstance(), []);
    const [models, setModels] = React.useState<AIModel[]>([]);

    React.useEffect(() => {
        setModels(aiService.getModels());
    }, []);

    const handleToggle = (id: string) => {
        aiService.toggleModel(id);
        setModels([...aiService.getModels()]);
    };

    return (
        <scrollView className="page">
            <stackLayout className="p-4">
                <label className="text-2xl font-bold text-light mb-4">AI Models</label>
                
                {models.map(model => (
                    <ModelCard
                        key={model.id}
                        model={model}
                        onToggle={() => handleToggle(model.id)}
                    />
                ))}

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Add Custom Model</label>
                    <label className="text-light opacity-70 mb-4">Deploy your own AI model</label>
                    <button className="btn-primary" text="Add Model" />
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}