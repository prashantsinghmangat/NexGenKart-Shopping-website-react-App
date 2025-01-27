import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  email: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/");
      return;
    }
    setUserData(JSON.parse(user));
  }, [navigate]);

  if (!userData) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-lg">{userData.email}</p>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <p className="text-gray-500">No orders yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;