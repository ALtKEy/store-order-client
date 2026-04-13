import { useEffect, useState } from "react";
import { OrderRow } from "../components/OrderRow.tsx";
import { AddOrderModal } from "../components/Modals.tsx";
import { orderApi } from "../api/orderApi.ts";
import { OrderStatus, type Order } from "../type/type.tsx";
import { SettingSideBar } from "./SettingSideBar.tsx";


export const View = () => {
  const [modalType, setModalType] = useState<"ADD" | "TIME" | "MSG" | null>(null);
  const [preparingOrders, setPreparingOrders] = useState<Order[]>([]);
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchAndSetOrders = async () => {
      try {
        const ordersData = await orderApi.getOrders(OrderStatus.PENDING);
        const readyOrdersData = await orderApi.getOrders(OrderStatus.SERVED);
        setPreparingOrders(ordersData);
        setReadyOrders(readyOrdersData);
      } catch (err) {
        console.error("주문 로드 실패:", err);
      }
    }
        fetchAndSetOrders();
      }, []);
  return (
    <div className="flex w-full h-screen bg-gray-50 overflow-hidden">
      <SettingSideBar />

      {/* 2. 준비 중 (나머지 70% 중 절반) */}
      <OrderRow
        title="준비 중"
        orders={preparingOrders}
        onTitleClick={() => setModalType("ADD")}
      />

      {/* 3. 준비 완료 (나머지 70% 중 절반) */}
      <OrderRow
        title="준비 완료"
        orders={readyOrders}
      />

      {/* 모달 */}
      <AddOrderModal
        isOpen={modalType === "ADD"}
        onClose={() => setModalType(null)}
        onRegister={(status, value, category) => orderApi.newOrder(status, value, category)}
      />
    </div>
  );
};
