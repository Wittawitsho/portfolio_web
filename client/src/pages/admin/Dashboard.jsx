import React, { useEffect, useState } from 'react';
import { listVisitors } from '../../api/visitor';
import usePortStore from '../../store/port-store';

const Dashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const token = usePortStore((state) => state.token);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await listVisitors(token);
        console.log(response.data);
        setVisitors(response.data);
      } catch (err) {
        console.error("Error fetching visitors:", err);
      }
    };

    fetchVisitors();
  }, [token]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().slice(0, 16).replace('T', ' ');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Message</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Created At</th>
            </tr>
          </thead>
          <tbody>
            {visitors.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center text-sm text-gray-500">
                  No visitors data available
                </td>
              </tr>
            ) : (
              visitors.map((visitor) => (
                <tr key={visitor.id} className="border-t border-gray-200">
                  <td className="py-3 px-6 text-sm text-gray-700">{visitor.name}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{visitor.email}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{visitor.message}</td>
                  <td className="py-3 px-6 text-sm text-gray-700">{formatDate(visitor.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
