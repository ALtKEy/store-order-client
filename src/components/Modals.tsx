import React, { useEffect, useState } from "react";
import { OrderStatus } from "../type/type.tsx";

interface BaseModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const BaseModal = ({ isOpen, title, children, onClose }: BaseModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-3xl w-[450px] shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-black mb-6 text-gray-800 border-b pb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

// 1. 주문 등록 모달 (카테고리 포함)
export const AddOrderModal = ({
  isOpen, onClose, onRegister
}: {
  isOpen: boolean; onClose: () => void; onRegister: (status: OrderStatus, value: string, categoryId: string) => void;
}) => {
  const categories = [
    { id: "0", name: "매장" },
    { id: "1", name: "전화" },
    { id: "2", name: "앱" },
    { id: "3", name: "배달" },
    { id: "4", name: "네이버" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const orderId = formData.get("orderId") as string;
    const categoryId = formData.get("categoryId") as string;
    if (orderId) {
      onRegister(OrderStatus.PENDING, orderId, categoryId);
      onClose();
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="새 주문 등록">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-bold text-gray-500 mb-2">주문 카테고리</label>
          <select
            name="categoryId"
            className="w-full border-2 border-gray-200 p-4 rounded-xl text-lg focus:border-blue-500 outline-none bg-gray-50"
          >
            {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-500 mb-2">주문 번호</label>
          <input
            name="orderId"
            type="text"
            placeholder="번호를 입력하세요"
            className="w-full border-2 border-gray-200 p-4 rounded-xl text-2xl font-bold focus:border-blue-500 outline-none"
            autoFocus
          />
        </div>
        <div className="flex gap-3 mt-4">
          <button type="button" onClick={onClose} className="flex-1 bg-gray-100 p-4 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition">취소</button>
          <button type="submit" className="flex-1 bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition">등록하기</button>
        </div>
      </form>
    </BaseModal>
  );
};

// 2. 예상 소요 시간 모달
export const SettingUpdateModal = ({
   type, onClose, beforeValue, onUpdate, title
}: {
  type: string; onClose: () => void; beforeValue: string; onUpdate: (val: string) => void; title: string;
  }) => {
  const [value, setValue] = useState<string>(beforeValue);
  return (
    <BaseModal isOpen={true} title={title}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-4">
          {type === "TIME" ? (
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-32 border-2 border-gray-200 p-4 rounded-xl text-4xl font-black text-center focus:border-blue-500 outline-none text-black"
              />
              <span className="text-2xl font-bold text-gray-500">분</span>
            </div>
          ) : (
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border-2 border-gray-200 p-4 rounded-xl text-lg min-h-[150px] focus:border-blue-500 outline-none resize-none text-black"
              placeholder="안내 문구를 입력하세요."
            />
          )}
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 bg-gray-100 p-4 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition">취소</button>
          <button onClick={() => { onUpdate(value); onClose(); }} className="flex-1 bg-blue-600 p-4 rounded-xl font-bold hover:bg-blue-700 transition">저장하기</button>
        </div>
      </div>
    </BaseModal>
  );
};