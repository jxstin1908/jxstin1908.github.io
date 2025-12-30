// WebSocket-Verbindung zum Backend
const socket = new WebSocket("wss://DEIN_BACKEND_URL"); // Später dein Backend einsetzen

socket.onopen = () => console.log("✅ Verbindung zum Backend hergestellt");
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("📩 Update vom Bot:", data);
};

// Funktion, um Befehle an den Bot zu senden
function sendCommand(command, payload) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ command, payload }));
    } else {
        console.error("❌ WebSocket nicht verbunden");
    }
}

// Beispiel: Voice Panel erstellen
function createVoicePanel(channelId) {
    sendCommand("create_voice_panel", { channel_id: channelId });
}

// Beispiel: Ticket Panel erstellen
function createTicketPanel(channelId) {
    sendCommand("create_ticket_panel", { channel_id: channelId });
}

// Beispiel: Autorole setzen
function setAutorole(roleId) {
    sendCommand("set_autorole", { role_id: roleId });
}

// Beispiel: Welcome Nachricht setzen
function setWelcome(channelId, text) {
    sendCommand("set_welcome", { channel_id: channelId, text: text });
}
