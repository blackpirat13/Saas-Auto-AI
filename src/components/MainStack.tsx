import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { LoginScreen } from "./screens/LoginScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { AIModulesScreen } from "./screens/AIModulesScreen";
import { PaymentsScreen } from "./screens/PaymentsScreen";
import { AssistantScreen } from "./screens/AssistantScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#000000",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{ title: "SaaS Automation" }}
            />
            <StackNavigator.Screen
                name="AIModules"
                component={AIModulesScreen}
                options={{ title: "AI Modules" }}
            />
            <StackNavigator.Screen
                name="Payments"
                component={PaymentsScreen}
            />
            <StackNavigator.Screen
                name="Assistant"
                component={AssistantScreen}
                options={{ title: "Virtual Assistant" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);