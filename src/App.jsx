import { useState } from "react";
import { Navbar } from "./components";

function App() {
  return (
    <div className="bg-veryLightGray w-full overflow-hidden">
      <div className="sm:px-[162px] px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
