// src/App.tsx
import { useState } from "react";
import { View } from "./views/View";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* 테스트를 위한 isAdmin 스위치 */}
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="fixed bottom-4 right-4 z-[9999] bg-gray-800 text-white px-4 py-2 rounded-full text-xs opacity-50 hover:opacity-100 transition-opacity"
      >
        모드 전환: {isAdmin ? "관리자" : "사용자"}
      </button>
        <View
        />
    </div>
  );
}

export default App;
