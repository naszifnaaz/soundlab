import { Sidebar } from "../components/admin/Sidebar";
import { UserTable } from "../components/admin/userTable";

export const UsersConsole = () => {
  return (
    <div>
      <Sidebar />
      <UserTable />
    </div>
  );
};
