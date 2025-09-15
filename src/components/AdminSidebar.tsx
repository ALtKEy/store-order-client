
export default function AdminSidebar() {
  return (
    <aside className="w-1/3 bg-black text-white p-8 flex flex-col justify-between items-center text-center rounded-r-lg">
      <div className="mt-16 w-full">
        <div className="cursor-pointer hover:bg-gray-700 p-4 rounded-lg">
          <h2 className="text-4xl font-bold">예상 조리시간</h2>
          <p className="text-8xl font-bold my-4">약 50<span className="text-6xl">분</span></p>
        </div>
        <div className="cursor-pointer hover:bg-gray-700 p-4 rounded-lg mt-8">
            <p className="text-3xl font-bold">온라인 주문의 경우</p>
            <p className="text-3xl font-bold mt-2">전화번호 뒤 4자리</p>
            <p className="text-3xl font-bold mt-2">말씀해주세요!</p>
        </div>
      </div>
      <div className="mb-16 w-full cursor-pointer hover:bg-gray-700 p-4 rounded-lg">
        <p className="text-3xl font-bold">주문 구분 설정</p>
      </div>
    </aside>
  );
}
