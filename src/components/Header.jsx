function Header(){
  return (
    <div className="flex items-center justify-between mb-5">
      <input
        type="text"
        placeholder="Search"
        className="bg-white border rounded-xl px-4 py-3 w-[320px]"
      />

      <div className="flex gap-3">
        <button className="bg-white px-4 py-2 rounded-xl border">
          Last 30 days
        </button>

        <button className="bg-white px-4 py-2 rounded-xl border">
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;