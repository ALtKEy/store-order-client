
import apiClient from './base';
import type { Order } from '../types/order';
import { OrderStatus } from '../types/OrderStatus';

// 모든 주문 목록을 가져오는 API 함수
export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await apiClient.get<Order[]>('/orders');
    // API 응답이 배열인지 확인하여 안정성을 높입니다.
    if (Array.isArray(response.data)) {
      return response.data;
    }
    throw Error("API response is not an array:" + response.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
    
    // 개발 중 API가 없을 경우를 대비한 목업 데이터 반환
    console.log("Returning mock data as a fallback.");
    const mockOrders: Order[] = [
      { id: 1, category: {id: 2, value: '이삭토스트앱'}, value: '0018', status: OrderStatus.PENDING },
      { id: 2, category: {id: 4, value: '네이버'}, value: '0017', status: OrderStatus.PENDING },
      { id: 3, category: {id: 2, value: '이삭토스트앱'}, value: '0016', status: OrderStatus.PENDING },
      { id: 9, category: {id: 3, value: '배달의민족'}, value: '0009', status: OrderStatus.SERVED },
      { id: 10, category: {id: 1, value: '전화'}, value: '0008', status: OrderStatus.SERVED },
    ];
    return mockOrders;
  }
};

// 여기에 주문 추가, 수정, 삭제 등 다른 API 함수들을 추가할 수 있습니다.
// 예: export const createOrder = async (newOrderData) => { ... };
