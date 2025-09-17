import React from "react";

function Featured() {
  return (
    <div data-scroll data-scroll-section className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          
          {/* FYDE Card */}
          <div className="group cardcontainer relative w-1/2 h-[70vh] cursor-pointer">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="FYDE project"
              />
            </div>
            <h1 className="absolute inset-0 flex items-center justify-center text-[#CDEA68] text-8xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              FYDE
            </h1>
          </div>

          {/* VISE Card */}
          <div className="group cardcontainer relative w-1/2 h-[70vh] cursor-pointer">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt="VISE project"
              />
            </div>
            <h1 className="absolute inset-0 flex items-center justify-center text-[#CDEA68] text-8xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              VISE
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
