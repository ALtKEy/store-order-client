// src/App.tsx
import { useEffect, useState } from "react";
import { OrderRow } from "./components/OrderRow";
import { useStompClient } from "./hooks/useStompClient";

function App() {

  const [orders, setOrders] = useState<any[]>([]);

  useStompClient((newOrder) => {
    console.log("🆕 새로운 주문:", newOrder);
    setOrders(prev => [...prev, newOrder]);
  });

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex items-center justify-center border border-black bg-gray-300 text-2xl">
                Box 3
      </div>
      <OrderRow title={'준비중'}/>
       <OrderRow title={'준비완료'}/>
    

    </div>
  );
}

export default App;