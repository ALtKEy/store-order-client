interface OrderProps {
  title: string;
  orders: any[];
  onTitleClick?: () => void;
}

export const OrderRow = ({ title, orders, onTitleClick }: OrderProps) => {
  // 8개까지만 보여주기
  const displayedOrders = orders;

  return (
    <div className="flex-1 flex flex-col items-center border-x border-gray-400 bg-gray-100 min-h-screen">
      {/* 타이틀 영역 */}
      <div
        className={`h-[80px] w-11/12 mt-8 rounded-xl bg-black text-white flex items-center justify-center text-4xl font-bold shadow-lg transition-transform ${
          onTitleClick ? "cursor-pointer hover:scale-105 active:scale-95" : ""
        }`}
        onClick={onTitleClick}
      >
        {title}
      </div>

      {/* 주문 리스트 영역 (최대 8개) */}
      <div className="w-full mt-10 px-6 flex flex-col gap-4">
        {displayedOrders.length > 0 ? (
          displayedOrders.map((order, index) => (
            <div
              key={order.id || index}
              className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center text-5xl font-black text-blue-600 shadow-md"
            >
              {order.value || order.id || order}
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center mt-20 text-xl">
            대기 중인 주문이 없습니다.
          </div>
        )}
      </div>

    </div>
  );
};