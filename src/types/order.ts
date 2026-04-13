import type { OrderCategory } from './OrderCategory';
import type { OrderStatus } from './OrderStatus';

export interface Order {
  id: number;
  value: string;
  category: OrderCategory;
  status: OrderStatus;
}
