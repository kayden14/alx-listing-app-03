const Header = () => {
  return (
    <header className="p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">LuxuryStay</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-md w-1/2"
      />
      <div className="space-x-4">
        <button className="text-blue-600">Sign In</button>
        <button className="text-blue-600">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
