import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";

type AssistantScreenProps = {
    navigation: FrameNavigationProp<any, "Assistant">,
};

export function AssistantScreen({ navigation }: AssistantScreenProps) {
    const [messages, setMessages] = React.useState([
        { text: "Hello! How can I help you today?", isBot: true }
    ]);
    const [input, setInput] = React.useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isBot: false }]);
            setInput("");
            // Simulate bot response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "I'm processing your request. This is a demo response.",
                    isBot: true
                }]);
            }, 1000);
        }
    };

    return (
        <gridLayout className="page" rows="*, auto">
            <scrollView row="0" className="p-4">
                <stackLayout>
                    {messages.map((msg, index) => (
                        <stackLayout
                            key={index}
                            className={`p-3 rounded-lg mb-2 ${msg.isBot ? 'ml-2' : 'mr-2'}`}
                            style={{
                                backgroundColor: msg.isBot ? 'rgba(0, 163, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                                maxWidth: '80%'
                            }}
                        >
                            <label className="text-light" textWrap={true}>{msg.text}</label>
                        </stackLayout>
                    ))}
                </stackLayout>
            </scrollView>

            <gridLayout row="1" columns="*, auto" className="p-2" backgroundColor="rgba(255, 255, 255, 0.1)">
                <textField
                    col="0"
                    className="p-3 text-light"
                    hint="Type your message..."
                    text={input}
                    onTextChange={(e) => setInput(e.value)}
                />
                <button
                    col="1"
                    className="btn-primary ml-2"
                    text="Send"
                    onTap={sendMessage}
                />
            </gridLayout>
        </gridLayout>
    );
}