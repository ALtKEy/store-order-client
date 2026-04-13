
import { OrderStatus } from '../types/OrderStatus';
import type { Order } from '../types/order';
import OrderCard from './OrderCard';

interface OrderListProps {
  orders: Order[];
  status: OrderStatus;
  title: string;
  onCardClick?: (order: Order) => void;
}

export default function OrderList({ orders, status, title, onCardClick }: OrderListProps) {
  const filteredOrders = orders.filter(order => order.status === status && order.status !== OrderStatus.DELETED);

  return (
    <div className="flex-1 bg-white rounded-lg p-4 overflow-y-auto">
      {title && <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>}
      <div className="space-y-2">
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}
