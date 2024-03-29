import React from "react";

function Header() {
  return (
    <div className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
      <header className="flex justify-between darl:text-white items-center">
        {/* left Side */}
        <div>
            <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Header;
