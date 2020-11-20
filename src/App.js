// import React from "react";
// import "./App.css";
// import Pic from "./PictureOfDay/picture";

// function App() {
//   return (
//     <div className="App">
//       <Pic/>
//       {/* <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//       </p> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Pic from "./PictureOfDay/picture"
import theme from './theme'
import "./App.css";
import { ThemeProvider } from "styled-components";

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
      <Pic />
      </ThemeProvider>
    </div>

  );
}

export default App;
