import React from "react";
import C_1 from "./img/C_1.PNG";
import C_3 from "./img/C_3.PNG";
import C_4 from "./img/C_4.PNG";
import C_5 from "./img/C_5.PNG";

import Car2 from "./img/Car2.jpg";
import Cup1 from "./img/Cup1.jpg";
import umbrella1 from "./img/umbrella1.jpg";
import tshirt3 from "./img/tshirt3.jpg";

export default function Others() {
  return (
    <div className="other-projects">
      <div className="line1">
        <img src={C_1} alt=" " />
        <img src={C_3} alt=" " />
        <img src={C_4} alt=" " />
        <img src={C_5} alt=" " />
      </div>

      <div className="line2">
        <img src={Cup1} alt=" " />
        <img src={Car2} alt=" " />
        <img src={umbrella1} alt=" " />
        <img src={tshirt3} alt=" " />
      </div>
    </div>
  );
}
