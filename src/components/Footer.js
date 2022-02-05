import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-amber-400 p-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-black font-semibold py-1">
                Copyright © {new Date().getFullYear()} Vy Vu
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
