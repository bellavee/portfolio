import React from "react";

function Information() {
  return (
    <>
      <div class="snap-y snap-mandatory h-screen overflow-scroll">
        <div class="snap-start bg-amber-200 h-screen flex items-center justify-center text-8xl">
          1
        </div>
        <div class="snap-start bg-teal-200  h-screen flex items-center justify-center text-8xl">
          2
        </div>
        <div class="snap-start bg-cyan-200 h-screen flex items-center justify-center text-8xl">
          3
        </div>
        <div class="snap-start bg-fuchsia-200 h-screen flex items-center justify-center text-8xl">
          4
        </div>
      </div>
    </>
  );
}

export default Information;
