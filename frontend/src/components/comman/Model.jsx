import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "../../style/comman/model.module.css";
import Select from "./Select";
function Model() {
  return (
    <div className={style.modelOuterConatiner}>
      <div className={style.modelInnerConatiner}>
        <div className={style.titlecontainer}>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <button>
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
        <div className={style.bodyContainer}>
          <input type="text" />
          <input className={style.duoDate} type="date" />
          <Select />
          <button>Update</button>
        </div>
        <div style={style.footerContainer}></div>
      </div>
    </div>
  );
}

export default Model;
