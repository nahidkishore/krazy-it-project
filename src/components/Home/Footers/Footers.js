import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footers.css";
const Footers = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Head Quarter </h4>
            <p>
              Gregory Hills
              <br />
              New South Wales
              <br />
              Australia
            </p>
          </div>

          <div className="col-md-3">
            <h4>Development Center</h4>
            <p>
              Bhuiyan Mansion
              <br />
              Motijheel, Dhaka
              <br />
              Bangladesh
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <p>Company logo</p>
          </div>

          <div className="col-md-6 text-center"></div>
          <div className="col-md-3 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGoogle} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pb-2">
          <p>© Copyright Nahidul Islam {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
};

export default Footers;
