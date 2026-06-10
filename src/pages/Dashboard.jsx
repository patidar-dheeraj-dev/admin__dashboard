import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import CashFlowChart from "../components/CashFlowChart";
import StatsCard from "../components/StatsCard";
import ActivityTable from "../components/ActivityTable";
import CardWidget from "../components/CardWidget";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { stats } = useSelector((state) => state.dashboard);

  return (
    <div className="flex bg-[#F6F7FB] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />
        <BalanceCard />
        <CashFlowChart />

        <div className="grid lg:grid-cols-3 gap-5 mt-5">
          {stats.map((item, index) => (
            <StatsCard key={index} item={item} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mt-5">
          <div className="lg:col-span-2">
            <ActivityTable />
          </div>

          <CardWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;