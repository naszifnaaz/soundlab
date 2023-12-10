import { Sidebar } from "../components/admin/Sidebar";
import Pagination from "../components/admin/pagination";
import { UserTable } from "../components/admin/userTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../features/admin/adminSlice";
import { useEffect, useState } from "react";
import { Spinner } from "../components/commons/spinner";

export const UsersConsole = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.admin.users);
  const isLoading = useSelector((store) => store.admin.loading);
  const totalDocuments = useSelector((store) => store.admin.totalDocuments);
  const totalPages = useSelector((store) => store.admin.totalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllUsers(page));
  }, []);
  return (
    <div>
      <Sidebar />
      {isLoading ? (
        <div className="w-full h-80 flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <UserTable users={users} />
      )}
      <Pagination
        totalDocuments={totalDocuments}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
