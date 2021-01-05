import React from "react";
// Note items component
const KeeperItem = (props) => {
  return (
    <div className="keeperItem">
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <button
        className="delBtn"
        onClick={() => {
          props.del(props.id);
        }}
      >
        x
      </button>
    </div>
  );
};
export default KeeperItem;
