import { useEffect, useState } from "react";
import { orderApi } from "../api/orderApi";

export const useSettingData = () => {
    const [data, setData] = useState({ time: "0", message: "" });

    const fetchSettings = async () => {
        try {
            const cookTimeValue = await orderApi.getSetting("0");
            const messageValue = await orderApi.getSetting("1");
            setData({ time: cookTimeValue, message: messageValue });
            } catch (err) {
                console.error("설정 로드 실패:", err);
            }
    }
    const updateTime = async (newTime: string) => {
        try {
            await orderApi.updateSetting("0", newTime);
            setData((prev) => ({ ...prev, time: newTime }));
        } catch (err) {
            console.error("조리 시간 업데이트 실패:", err);
        }
    }
    const updateMessage = async (newMessage: string) => {
        try {
            await orderApi.updateSetting("1", newMessage);
            setData((prev) => ({ ...prev, message: newMessage }));
        } catch (err) {
            console.error("안내 문구 업데이트 실패:", err);
        }
    }

    useEffect(() => {
        fetchSettings();
    }, []);

    return { data, setData, updateTime, updateMessage };
}