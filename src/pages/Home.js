import React from "react";
import Footer from "../components/Footer";
import Navigate from "../components/Navigate";

function Home() {
  return (
    <>
      <Navigate />
      <section className="bg-amber-400 flex items-center justify-center pt-20">
        <div className="w-10/12">
          <div className="border-4 border-black bg-white">
            <div className="py-10 h-screen">
              <h1 className="px-10 font-bold text-4xl">Nguyen Phuong Vy Vu</h1>
              <p className="px-10 pt-4 text-xl">
                Third-year student at Unicaen
              </p>
            </div>

            <div className="py-10 h-screen">
              <h1 className="text-3xl p-10 font-bold underline">About</h1>
            </div>

            <div className="py-10 h-screen">
              <h1 className="text-3xl p-10 font-bold underline">Projects</h1>
            </div>

            <div className="py-10 h-screen">
              <h1 className="text-3xl p-10 font-bold underline">Contact</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
