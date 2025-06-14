// src/App.tsx
import { OrderRow } from "./components/OrderRow";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <OrderRow title={'조리대기중'}/>
       <OrderRow title={'조리중'}/>
      
      <div className="flex-1 flex items-center justify-center border border-black bg-gray-300 text-2xl">
        Box 3
      </div>
    </div>
  );
}

export default App;