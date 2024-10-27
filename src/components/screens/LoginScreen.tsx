import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet, alert } from "react-nativescript";

type LoginScreenProps = {
    navigation: FrameNavigationProp<any, "Login">,
};

// Test user credentials
const TEST_USER = {
    email: "demo@saasauto.com",
    password: "Demo123!"
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleLogin = () => {
        if (email === TEST_USER.email && password === TEST_USER.password) {
            setError("");
            navigation.navigate("Dashboard");
        } else {
            setError("Invalid credentials");
            alert({
                title: "Login Failed",
                message: "Please use the following test credentials:\nEmail: demo@saasauto.com\nPassword: Demo123!",
                okButtonText: "OK"
            });
        }
    };

    return (
        <flexboxLayout className="page" style={styles.container}>
            <stackLayout className="p-8 w-full">
                <image
                    src="https://cdn-icons-png.flaticon.com/512/8326/8326537.png"
                    className="h-24 w-24 mb-4 self-center"
                />
                
                <label className="text-3xl font-bold text-light text-center mb-2">
                    SaaS Automation
                </label>
                
                <label className="text-light text-center opacity-70 mb-8">
                    Mobile App
                </label>
                
                <textField
                    className="bg-white/10 p-4 rounded-lg mb-4 text-light"
                    hint="Email"
                    keyboardType="email"
                    text={email}
                    onTextChange={(e) => setEmail(e.value)}
                    autocorrect={false}
                    autocapitalizationType="none"
                />
                
                <textField
                    className="bg-white/10 p-4 rounded-lg mb-4 text-light"
                    hint="Password"
                    secure={true}
                    text={password}
                    onTextChange={(e) => setPassword(e.value)}
                />
                
                {error ? (
                    <label className="text-red-500 mb-4 text-center">{error}</label>
                ) : null}
                
                <button
                    className="btn-primary"
                    onTap={handleLogin}
                    text="Login"
                />
                
                <button
                    className="text-primary mt-4"
                    onTap={() => {
                        alert({
                            title: "Test Credentials",
                            message: "Email: demo@saasauto.com\nPassword: Demo123!",
                            okButtonText: "OK"
                        });
                    }}
                    text="Show Test Credentials"
                />
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
});