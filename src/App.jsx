import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for larger screens */}
      <aside
        className={`${
          isSidebarOpen ? "flex" : "hidden"
        } md:flex w-64 bg-white shadow-md flex flex-col justify-between fixed z-50 h-[100vh]`}
      >
        <div>

            <div className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Prashant Kumar</p>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
            </div>

            <nav className="mt-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-3 text-purple-600 bg-gray-100 hover:bg-gray-200"
                  : "flex items-center p-3 text-gray-700 hover:bg-gray-200"
              }
            >
              <span className="ml-4">Employee</span>
            </NavLink>

            <NavLink
              to="/employee_form"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-3 text-purple-600 bg-gray-100 hover:bg-gray-200"
                  : "flex items-center p-3 text-gray-700 hover:bg-gray-200"
              }
            >
              <span className="ml-4">Add Employee</span>
            </NavLink>
          </nav>

        </div>

        <div className="mt-auto md:mt-20 p-4 text-center">
          <p className="text-gray-600 text-sm">Need Help?</p>
          <p className="text-gray-800 text-sm">505-078-1856</p>
          <p className="text-purple-600 text-sm">help@emailaddress.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 sm:p-6 w-full">
        <div className="flex justify-end items-center">
          {/* Hamburger Icon for mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700">
            Add Employee
          </button> */}
        </div>

        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
