import { useSelector } from "react-redux";

function BalanceCard(){
  const { balance, growth } = useSelector(
    (state) => state.dashboard
  );

  return (
    <div className="bg-teal-800 text-white rounded-3xl p-8 flex justify-between items-center">
      <div>
        <p className="text-gray-200">Total Balance</p>

        <h1 className="text-5xl font-bold mt-2">
          {balance}
        </h1>

        <span className="text-green-400 mt-2 inline-block">
          {growth}
        </span>
      </div>

      <div className="flex gap-3">
        <button className="bg-green-400 text-black px-5 py-3 rounded-xl font-medium">
          Add
        </button>

        <button className="bg-white/10 px-5 py-3 rounded-xl">
          Send
        </button>

        <button className="bg-white/10 px-5 py-3 rounded-xl">
          Request
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;