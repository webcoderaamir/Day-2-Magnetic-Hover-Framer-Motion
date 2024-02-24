import React from "react";
import Magnetic from "./components/Magnetic";

const App = () => {
  return (
    <div className="hero w-full h-screen bg-[#f4efab]">
      
      <div className="nav absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[1.4vw] flex gap-14 text-[#416D19]">
        <Magnetic>
          <a className="group relative" href="">
            <span>About</span>
            <div className="absolute w-[0.40rem] group-hover:opacity-100 opacity-0 duration-100 h-[0.40rem] bg-[#416D19] left-1/2 -translate-x-1/2 rounded-full"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a className="group relative" href="">
            <span>Services</span>
            <div className="absolute w-[0.40rem] opacity-0 group-hover:opacity-100 duration-100 h-[0.40rem] bg-[#416D19] left-1/2 -translate-x-1/2 rounded-full"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a className="group relative" href="">
            <span>Works</span>
            <div className="absolute w-[0.40rem] opacity-0 group-hover:opacity-100 duration-100 h-[0.40rem] bg-[#416D19] left-1/2 -translate-x-1/2 rounded-full"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a className="group relative" href="">
            <span>Contact</span>
            <div className="absolute w-[0.40rem] opacity-0 group-hover:opacity-100 duration-100 h-[0.40rem] bg-[#416D19] left-1/2 -translate-x-1/2 rounded-full"></div>
          </a>
        </Magnetic>
      </div>

      <div className="footer absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-x-2">
        <div className="mg flex gap-2 text-[#416D19]">
          <p>Magnetic hover built by</p>
          <Magnetic>
            <a
              className="txt relative hover:scale-[1.2] transition-all duration-100 font-[ClashDisplay-Variable]"
              href="https://www.linkedin.com/in/aamir-ayub-3671b32a9"
            >
              <span>Aamir</span>
            </a>
          </Magnetic>
          <p>& Credits:</p>
          <Magnetic>
            <a
              className="txt relative hover:scale-[1.1] transition-all duration-100 font-[ClashDisplay-Variable]"
              href="https://www.instagram.com/web_coding._?utm_source=qr&igsh=Z3U2aW5wbHVmbzV6"
            >
              <span>Web_Coding</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default App;
