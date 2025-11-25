// import React from "react";
// import Student from "./Student";

// function App() {
//   return (
//     <div>
//       <h1>Props Example</h1>

//       <Student name="Aisha" age={24}  />
//       <Student name="Aisha" age={24} />
//     </div>
//   );
// }

// export default App;


//props children example
import Note from "./Note";
//import Student from "./Student";
function App() {
  return (
    <div>
      <h1>Props Children Example</h1>

      <Note content="This is the React.">
        <p>This inside the Note component.</p>
        <button>Click Me</button>
        <div><p>Hi</p></div>
      </Note>

      <Note>
        <h3>Another Note Block</h3>
        <p>More info passed as children.</p>
        
      </Note>
      <Note>
         <Student name="Manish" age={25} />

      </Note>
    </div>
  );
}

export default App;
