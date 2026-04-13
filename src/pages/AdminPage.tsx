
import { OrderStatus } from '../types/OrderStatus';
import type { Order } from '../types/order';
import AdminSidebar from '../components/AdminSidebar';
import OrderList from '../components/OrderList';

interface AdminPageProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

export default function AdminPage({ orders, setOrders }: AdminPageProps) {

  const handleMoveOrder = (orderToMove: Order) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderToMove.id ? { ...order, status: OrderStatus.SERVED } : order
      )
    );
  };

  const handleDeleteOrder = (orderToDelete: Order) => {
    // Later, this will open a confirmation modal.
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderToDelete.id ? { ...order, status: OrderStatus.DELETED } : order
        )
      );
    }
  };

  return (
    <div className="flex h-screen bg-white font-nanum-square">
      <AdminSidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex flex-1 gap-4 p-4 overflow-hidden">
          <OrderList orders={orders} status={OrderStatus.PENDING} title="준비중" onCardClick={handleMoveOrder} />
          <OrderList orders={orders} status={OrderStatus.SERVED} title="준비완료" onCardClick={handleDeleteOrder} />
        </div>
      </main>
    </div>
  );
}
