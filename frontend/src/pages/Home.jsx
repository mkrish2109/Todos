import React from "react";
import style from "../style/home/home.module.css";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={`text-5xl font-extrabold ${style.left}`}>
        <h1 className="text-4xl font-mono leading-loose bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
      </div>
      <div className={style.right}>
        <img src="/image/home.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
