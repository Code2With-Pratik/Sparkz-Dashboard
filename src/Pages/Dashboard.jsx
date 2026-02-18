import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import EmployeeFilter from "../components/employee/EmployeeFilters";
import EmployeeTable from "../components/employee/EmployeeTable";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-center m-5 ">
        <h1 className="text-xl text-primary">work Center</h1>
      </div>
       <EmployeeFilter></EmployeeFilter>
       <div className="mt-5">
         <EmployeeTable></EmployeeTable>
       </div>

    </MainLayout>
  );
};

export default Dashboard;
