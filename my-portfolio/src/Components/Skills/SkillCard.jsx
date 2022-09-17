import React from "react";

const SkillCard = ({img_url,title}) => {
  return (
    <div className="skillCard">
      <div className="skillCardImageDiv">
        <img src={img_url} alt={title} className="skillCardImg" />
      </div>
      {/* <hr style={{width:"80%",margin:"5px auto"}}/> */}
      <h4>
        <b>
          <i>{title}</i>
        </b>
      </h4>
    </div>
  );
};

export default SkillCard;
