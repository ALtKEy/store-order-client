
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayPage from './pages/DisplayPage';
import AdminPage from './pages/AdminPage';
import type { Order } from './types/order';
import { getOrders } from './api/orders';

function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const fetchedOrders = await getOrders();
      setOrders(fetchedOrders);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="flex h-screen w-screen items-center justify-center">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayPage orders={orders} />} />
        <Route path="/admin" element={<AdminPage orders={orders} setOrders={setOrders} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
