import { useState } from "react";
import { Navbar, Hero, Features, Work, Footer } from "./components";

function App() {
  return (
    <div className="bg-veryLightGray w-full overflow-hidden">
      <div className="sm:px-[150px] px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="bg-white sm:px-[150px] px-6 md:mt-[280px] mt-[75px] flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Features />
          <Work />
        </div>
      </div>

      <div className="bg-hsl(0, 0%, 98%) flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
