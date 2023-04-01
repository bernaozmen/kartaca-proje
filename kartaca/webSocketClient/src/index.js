import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { createRoot } from 'react-dom/client';

//const client = new W3CWebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');
const client = new W3CWebSocket('ws://127.0.0.1:8000');

export default class App extends Component {
       
    componentDidMount(){
        client.onopen = () => {
            console.log('WebSocket Client Connected');
            const dataFromServer = {
                type: "REGISTER", 
                name: "Berna", 
                surname: "Ozmen", 
                email: "enecberna@hotmail.com",
                registrationKey: "xxx"
            };

            client.send(JSON.stringify(dataFromServer));           
        };       

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data.toString('utf8'));
            console.log('Message is:', dataFromServer);
        };
    }

    render() {
        return (
            <div>
               Connected!
            </div>
        )
    }
}

createRoot(document.getElementById('root')).render(<App />)