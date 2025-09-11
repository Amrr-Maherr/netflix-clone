// components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="absolute container top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6 z-20">
      {/* Logo */}
      <div className="h-[50px] w-[185px]">
        <img
          src="/images/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-white text-sm md:text-base">Sign In</button>
        <button className="bg-red-600 text-white text-sm md:text-base px-3 py-1 rounded hover:bg-red-700">
          Register
        </button>
      </div>
    </header>
  );
}
