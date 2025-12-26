import React from "react";

function Note(props) {
  console.log("Children Passed:", props.children);

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        border: "2px solid green"
      }}
    >
      <h2>Note Box</h2>
      {props.children}
      {props.content}

      {}
    </div>
  );
}

export default Note;
