import React from "react";
import MovieList from "./components/MovieList";
import logo from "./assets/logo.png";
import "./styles.css";

import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="Studio ghibli official logo" />
        <h1>API</h1>
        <Button color="success">Test Button</Button>
        <MovieList />
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import { Button } from "reactstrap";
// import MovieList from "./components/MovieList";
// import logo from "./assets/logo.png";
// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <div className="logo_container">
//         <img className="logo" src={logo} alt="studio ghibli official logo" />
//         <h1>API</h1>
//         {/* Can pass props to reactstrap components, but must follow their prop definitions found in their docs*/}
//         <Button color="primary">Test</Button>
//         <MovieList />
//       </div>
//     </div>
//   );
// }

// export default App;
