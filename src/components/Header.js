// src/components/Header.js

import React from "react";
import Title from "./Title.js";
import Description from "./Description.js";

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from "../logo.svg";

// Logo served from the public folder (Production only)
// const logoPublicUrl = '/logo512.png';

// We don't need to specify the `props` argument as we are not using them in this component
function Header() {
  return (
    <header className="App-header">
      <div>
        <img src="https://i.imgur.com/OH7dtc0.png" alt="" />
        <p>Ironhacker</p>
      </div>

      {/*       
          Use the <Title /> and <Description /> components
          and pass them the data via `props` or `props.children`.
      */}

      {/*      Your code here ...      */}
      <Title appTitle="My App Title" />
      <Description>
        This is a description of my app. It provides an overview of the app's
        functionality and purpose.
      </Description>
    </header>
  );
}

// export the component
export default Header;
