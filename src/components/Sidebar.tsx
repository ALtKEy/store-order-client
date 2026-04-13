
export default function Sidebar() {
  return (
    <aside className="w-1/3 bg-black text-white p-8 flex flex-col justify-between items-center text-center rounded-r-lg">
      <div className="mt-16">
        <h2 className="text-4xl font-bold">예상 조리시간</h2>
        <p className="text-8xl font-bold my-4">약 50<span className="text-6xl">분</span></p>
        <p className="text-2xl tracking-[.5em]">...</p>
      </div>
      <div className="mb-16">
        <p className="text-3xl font-bold">온라인 주문의 경우</p>
        <p className="text-3xl font-bold mt-2">전화번호 뒤 4자리</p>
        <p className="text-3xl font-bold mt-2">말씀해주세요!</p>
      </div>
    </aside>
  );
}
