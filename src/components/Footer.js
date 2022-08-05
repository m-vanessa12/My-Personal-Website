import React from "react";

export default function Footer() {
  return (
    <div className="address">
      <div className="container">
        <div className="info" id="email">
          <i class="fa fa-map-marker"></i>
          <p>
            Kigali - Rwanda,
            <br /> KG 197
          </p>
        </div>

        <div className="info" id="phone">
          <i class="fa fa-phone"></i>
          <p>
            Tel: +250780705984/
            <br />
            +25082503037
          </p>
        </div>

        <div className="info" id="email">
          <i class="fa fa-envelope-o" id="email"></i>
          <p>
            mukavanessa8@gmail.com/
            <br />
            v.mukamanzi@alustudent.com
          </p>
        </div>
      </div>
    </div>
  );
}
