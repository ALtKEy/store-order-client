import { useState } from "react";
import { SettingUpdateModal } from "../components/Modals";
import { useSettingData } from "../hooks/useSettingData";

export const SettingSideBar = () => {
    const { data, updateTime, updateMessage } = useSettingData(); // 훅에서 비즈니스 로직(API 호출 등) 제공
    const [modalType, setModalType] = useState<"TIME" | "MSG" | null>(null);

    return (

    <div className="w-[30%] flex flex-col border-r border-gray-300 bg-gray-900 text-white p-8">
      {/* 조리 시간 표시 및 클릭 이벤트 */}
      <div className="text-3xl font-black mb-10 text-center border-b border-gray-700 pb-4 tracking-tighter" onClick={() => setModalType("TIME")}>
        예상 조리 시간 <br /> 약 {data.time}분
      </div>

      {/* 안내 문구 카드 */}
    <div onClick={() => setModalType("MSG")} className="bg-gray-800 p-6 rounded-3xl shadow-inner cursor-pointer border-2 border-transparent transition-all group">
        <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">사용자 안내 문구</label>
            <p className="text-lg font-medium text-gray-300 line-clamp-3 leading-relaxed">
                    "{data.message || "안내 문구가 설정되지 않았습니다."}"
                </p>
            </div>
            {modalType && (
                <SettingUpdateModal
                    type={modalType || ""}
                    onClose={() => setModalType(null)}
                    beforeValue={modalType === "MSG" ? data.message : data.time}
                    onUpdate={modalType === "MSG" ? updateMessage : updateTime}
                    title={modalType === "MSG" ? "안내 메시지 설정" : "예상 조리 시간 설정"}
                />)}
    </div>
  );
}