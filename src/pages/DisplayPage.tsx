
import { OrderStatus } from '../types/OrderStatus';
import Sidebar from '../components/Sidebar';
import OrderList from '../components/OrderList';
import type { Order } from '../types/order';

interface DisplayPageProps {
  orders: Order[];
}

export default function DisplayPage({ orders }: DisplayPageProps) {
  return (
    <div className="flex h-screen bg-white font-nanum-square">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex flex-1 gap-4 p-4 overflow-hidden">
          <OrderList orders={orders} status={OrderStatus.PENDING} title="준비중" />
          <OrderList orders={orders} status={OrderStatus.SERVED} title="준비완료" />
        </div>
      </main>
    </div>
  );
}