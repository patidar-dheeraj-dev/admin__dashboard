import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
} from "recharts";

import { useSelector } from "react-redux";

function CashFlowChart(){
  const { chartData } = useSelector(
    (state) => state.dashboard
  );

  return (
    <div className="bg-white rounded-3xl p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-5">
        Cash Flow
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="income" fill="#0F766E" radius={[8,8,0,0]} />
            <Bar dataKey="expense" fill="#22C55E" radius={[8,8,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashFlowChart;