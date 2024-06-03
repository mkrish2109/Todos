import React from "react";
import style from "../style/home/home.module.css";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={`text-5xl font-extrabold ${style.left}`}>
        <h1 className="text-4xl leading-loose  text-[#ffffff]">
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
