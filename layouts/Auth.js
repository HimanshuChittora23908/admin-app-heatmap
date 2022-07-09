import React from "react";

export default function Auth({ children }) {
  return (
    <>
      <main>
        <section className="relative w-full h-full flex items-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/register_bg_2.png')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
