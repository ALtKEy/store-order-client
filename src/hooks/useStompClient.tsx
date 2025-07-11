import { useEffect, useRef } from 'react';
import { Client} from '@stomp/stompjs';

const serverUrl = 'ws://localhost:8080/ws/order';
type MessageHandler = (message: any) => void;

export const useStompClient = (onMessage: MessageHandler) => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: serverUrl,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("연결 완료");
        client.subscribe('/refresh/order', (message) => {
          try {
            const parsed = JSON.parse(message.body);
            onMessage(parsed);
          } catch (err) {
            console.error("JSON 파싱 실패:", err);
          }
        });
      },
      onStompError: (frame) => {
        console.error('STOMP 오류:', frame.headers['message']);
      },
      onWebSocketError: (event) => {
        console.error('WebSocket 연결 오류:', event);
      },
      onDisconnect: () => {
        console.warn('WebSocket 연결 끊김');
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, [onMessage]);
};