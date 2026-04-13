import type { Order, OrderStatus } from "../type/type.tsx";

const API_BASE_URL = "http://localhost:8080";

export const orderApi = {
  getOrders: async (status: string): Promise<Order[]> => {
    const response = await fetch(`${API_BASE_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { 
          ordersByStatusAndLimit(status: ${status}, limit: 8) { 
            id 
            value 
            status 
            createdDateTime 
            updatedDateTime 
            category { id value }
          } 
        }`
      })
    });
    if (!response.ok) throw new Error("주문 목록을 불러오지 못했습니다.");
    const result = await response.json();
    return result.data.ordersByStatusAndLimit;
  },

  // 새 주문 등록하기 (GraphQL Mutation 사용)
  newOrder: async (status: string, value: string, categoryId: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation ($order: OrderInput!) {
          newOrder(order: $order) {
            id
          }
        }`,
        variables: {
          order: {
            status: status,
            value: value,
            category: { id: categoryId }
          }
        }
      }),
    });
    if (!response.ok) {
        const errorResult = await response.json();
        console.error("GraphQL Error:", errorResult);
        throw new Error("주문을 등록하지 못했습니다.");
    }
  },

  getSetting: async (id: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/setting/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("설정을 불러오지 못했습니다.");
    const result = await response.json();
    // SettingController가 Setting 객체를 직접 반환하므로 result.value로 접근
    return result.value;
  },

  updateSetting: async (id: string, value: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/setting/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id ,value: value })
    });
    if (!response.ok) throw new Error("설정을 업데이트하지 못했습니다.");
  }
};
