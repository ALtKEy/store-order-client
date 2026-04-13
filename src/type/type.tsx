export interface Order {
  id: string;
  status: OrderStatus;
  value: string;
}
export const OrderStatus = {
  PENDING : "PENDING",
  SERVED : "SERVED",
  DELETED : "DELETED"
} as const;

export type OrderStatus = keyof typeof OrderStatus;