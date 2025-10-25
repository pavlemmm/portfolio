import Window from "./Window.tsx";

export default function Terminal() {
    return (
        <Window>
            <Window.Title>Terminal</Window.Title>
            <Window.Content className="text-green-400 font-mono">
                Hello From term
            </Window.Content>
        </Window>
    );
}