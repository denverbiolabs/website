import React from "react";
import "./NotFound.css";
import alderaan from "../images/alderaan.jpg";

export default () =>
  <div className="NotFound">
    <h3>Looks like the death star got here first</h3>
    <div className='404'>
      {alderaan}
    </div>
  </div>;
