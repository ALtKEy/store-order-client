
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // 서버 API의 기본 URL로 설정합니다.
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
