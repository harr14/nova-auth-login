import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to NovaAuth</h1>
        <p className="text-slate-400 mb-8">
          You are logged in as <span className="text-indigo-400">{email}</span>
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-6">
          <p className="text-lg">This is a dummy Dashboard page.</p>
          <p className="text-slate-400 mt-2">Your login flow is working correctly!</p>
        </div>

        <button
          onClick={handleLogout}
          className="px-6 py-2.5 bg-red-600 hover:bg-red-500 rounded-xl transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
}