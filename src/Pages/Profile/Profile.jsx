import { AuthContext } from "../../Context/AuthContext/AuthContext";
import React, { useContext, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

function Profile() {
  const { user, loading } = useContext(AuthContext);
 
  useEffect(() => {
    document.title = user?.displayName + " Profile" || "User Profile";
  }, [user]);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
      <div className="flex flex-col justify-center items-center z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black-400 mb-2">Profile</h1>
          <p className="text-black-300">
            Manage your profile and preferences
          </p>
        </div>

        <div className="space-y-6 bg-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Personal Information
          </h2>

          <div className="flex items-center space-x-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <img
                src={
                  user?.photoURL ||
                  "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                }
                alt="User"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black">
                {user?.displayName || "User"}
              </h3>
              <p className="text-black">{user?.email}</p>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-700 text-sm font-medium">
                  Online
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
                  Email Address
                </label>
                <div className="bg-white border border-blue-700 rounded-lg p-3">
                  <p className="text-blue-700">{user?.email}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
                  Display Name
                </label>
                <div className="bg-white border border-blue-700 rounded-lg p-3">
                  <p className="text-blue-700">{user?.displayName || "Not set"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
                  User ID
                </label>
                <div className="bg-white border border-blue-700 rounded-lg p-3">
                  <p className="text-blue-700 font-mono text-sm">{user?.uid}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Account Status
                </label>
                <div className="bg-white border border-blue-700 rounded-lg p-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      user?.emailVerified
                        ? "bg-green-500/20 text-blue-700"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {user?.emailVerified ? "Verified" : "Not Verified"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
