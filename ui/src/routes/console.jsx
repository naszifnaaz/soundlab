import { Sidebar } from "../components/admin/Sidebar";
import { StatsCard } from "../components/admin/statsCard";

export const Console = () => {
  return (
    <div>
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex flex-wrap gap 5 justify-evenly">
            <StatsCard title={"Users"} stat={1234} percent={23} />
            <StatsCard title={"Products"} stat={3452} percent={10} />
            <StatsCard title={"Orders"} stat={103} percent={32} />
            <StatsCard title={"Revenue"} stat={1342342} percent={51} />
          </div>
        </div>
      </div>
    </div>
  );
};
