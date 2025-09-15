
import { OrderStatus } from '../types/OrderStatus';
import type { Order } from '../types/order';

interface OrderCardProps {
  order: Order;
  onClick?: (order: Order) => void;
}

export default function OrderCard({ order, onClick }: OrderCardProps) {
  const isReady = order.status === OrderStatus.SERVED;
  const cardClasses = `p-4 rounded-lg text-2xl font-bold ${isReady ? 'bg-yellow-200 text-red-500' : 'bg-white'}`;

  if (onClick) {
    return (
      <div className={`${cardClasses} cursor-pointer hover:ring-2 hover:ring-blue-500`} onClick={() => onClick(order)}>
        <span>[{order.category.value}]</span>
        <span className="ml-4">{order.value}</span>
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      <span>[{order.category.value}]</span>
      <span className="ml-4">{order.value}</span>
    </div>
  );
}
