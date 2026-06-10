function CardWidget(){
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Card</h2>

        <button className="text-teal-700">
          See All
        </button>
      </div>

      <div className="bg-teal-800 text-white rounded-3xl p-6 mt-5 h-[220px] flex flex-col justify-between">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">VISA</h1>

          <span>2104</span>
        </div>

        <div>
          <p className="text-4xl font-bold">
            € 4.540,20
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;