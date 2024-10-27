import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";

type PaymentsScreenProps = {
    navigation: FrameNavigationProp<any, "Payments">,
};

export function PaymentsScreen({ navigation }: PaymentsScreenProps) {
    return (
        <scrollView className="page">
            <stackLayout className="p-4">
                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Wallet Balance</label>
                    <label className="text-3xl text-primary mb-4">2.5 ETH</label>
                    <gridLayout columns="*, *" className="mb-4">
                        <button className="btn-primary m-1 col-0" text="Send" />
                        <button className="btn-primary m-1 col-1" text="Receive" />
                    </gridLayout>
                </stackLayout>

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Supported Currencies</label>
                    <stackLayout className="mb-2">
                        <label className="text-light">Bitcoin (BTC)</label>
                        <label className="text-light">Ethereum (ETH)</label>
                        <label className="text-light">USDC</label>
                    </stackLayout>
                </stackLayout>

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Recent Transactions</label>
                    <stackLayout className="mb-2">
                        <label className="text-light">AI Service Payment - 0.1 ETH</label>
                        <label className="text-light opacity-70">2 hours ago</label>
                    </stackLayout>
                    <stackLayout className="mb-2">
                        <label className="text-light">Resource Allocation - 0.05 ETH</label>
                        <label className="text-light opacity-70">Yesterday</label>
                    </stackLayout>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}