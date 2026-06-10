import { useSelector } from "react-redux";

function ActivityTable() {
  const { activities } = useSelector(
    (state) => state.dashboard
  );

  return (
    <div className="bg-white rounded-3xl p-6">
      <h2 className="text-2xl font-semibold mb-5">
        Recent Activity
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 border-b">
            <th className="pb-3">Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Method</th>
          </tr>
        </thead>

        <tbody>
          {activities.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-4">{item.name}</td>
              <td>{item.amount}</td>
              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </td>
              <td>{item.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;