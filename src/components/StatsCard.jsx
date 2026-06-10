function StatsCard({ item }){
  return (
    <div className="bg-white rounded-3xl p-6">
      <h3 className="text-gray-500">{item.title}</h3>

      <h1 className="text-4xl font-bold mt-4">
        {item.amount}
      </h1>

      <p className="text-green-500 mt-3">
        {item.growth}
      </p>
    </div>
  );
};

export default StatsCard;