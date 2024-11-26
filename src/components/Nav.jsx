import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <div className="grid grid-cols-12">
          <div className="logo col-start-1 col-span-2">
            <h1 className="text-3xl">SNEAKERS</h1>
          </div>
          <div className=" col-start-6 col-span-6">
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
          </div>
          <button>
            <span>Login</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
