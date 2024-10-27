import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { CloudService, CloudResource } from "../../services/CloudService";

type DashboardScreenProps = {
    navigation: FrameNavigationProp<any, "Dashboard">,
};

const ProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
    const percentage = (value / maxValue) * 100;
    return (
        <gridLayout columns="*, auto" className="mb-2">
            <stackLayout col="0" className="mr-2" backgroundColor="rgba(255,255,255,0.1)" borderRadius={4}>
                <stackLayout 
                    width={`${percentage}%`}
                    height={8}
                    backgroundColor="#00a3ff"
                    borderRadius={4}
                />
            </stackLayout>
            <label col="1" className="text-light">{`${percentage}%`}</label>
        </gridLayout>
    );
};

const ResourceCard = ({ resource, onOptimize }: { resource: CloudResource; onOptimize: () => void }) => (
    <stackLayout className="card">
        <gridLayout columns="*, auto">
            <stackLayout col="0">
                <label className="text-xl font-bold text-light">{resource.name}</label>
                <label className="text-light opacity-70">{resource.type}</label>
            </stackLayout>
            <button 
                col="1" 
                className="btn-primary" 
                text="Optimize" 
                onTap={onOptimize}
            />
        </gridLayout>
        <ProgressBar value={resource.usage} maxValue={100} />
        <label className="text-light opacity-70">Usage: {resource.usage}%</label>
        <label className="text-primary">Cost: ${resource.cost}/hour</label>
    </stackLayout>
);

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    const cloudService = React.useMemo(() => CloudService.getInstance(), []);
    const [resources, setResources] = React.useState<CloudResource[]>([]);

    React.useEffect(() => {
        setResources(cloudService.getResources());
    }, []);

    const handleOptimize = (id: string) => {
        cloudService.optimizeResource(id);
        setResources([...cloudService.getResources()]);
    };

    return (
        <scrollView className="page">
            <stackLayout className="p-4">
                <gridLayout columns="*, *" rows="auto, auto" className="mb-4">
                    <stackLayout className="card col-0" onTap={() => navigation.navigate("AIModules")}>
                        <label className="text-xl font-bold text-light">AI Modules</label>
                        <label className="text-light opacity-70">Manage AI Services</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-1" onTap={() => navigation.navigate("Payments")}>
                        <label className="text-xl font-bold text-light">Payments</label>
                        <label className="text-light opacity-70">Crypto Transactions</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-0 row-1" onTap={() => navigation.navigate("Assistant")}>
                        <label className="text-xl font-bold text-light">Assistant</label>
                        <label className="text-light opacity-70">AI Support</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-1 row-1">
                        <label className="text-xl font-bold text-light">Analytics</label>
                        <label className="text-light opacity-70">Resource Usage</label>
                    </stackLayout>
                </gridLayout>

                <label className="text-2xl font-bold text-light mb-4">Cloud Resources</label>
                
                {resources.map(resource => (
                    <ResourceCard
                        key={resource.id}
                        resource={resource}
                        onOptimize={() => handleOptimize(resource.id)}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}