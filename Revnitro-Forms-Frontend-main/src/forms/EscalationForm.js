import React, { useState } from "react";
import ApplyJob from "./NewForms/ApplyJob";
import BusinessColobration from "./NewForms/BusinessCollabration";
import Escalationforms from "./NewForms/Escalation";
import OwnerShipReview from "./NewForms/OwnerShipReview";
import { Helmet } from "react-helmet";

const Escalation = () => {
  const [activeContainer, setActiveContainer] = useState(1);

  const handleButtonClick = (containerNumber) => {
    setActiveContainer(containerNumber);
  };

  return (
    <div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="paraisnong">
          For any inquiries, please feel free to contact us using the provided email, contact form, or visit us at our address. We look forward to hearing from you!
        </p>
        <div className="contact-details">
          <div className="column">
            <p>Mail Id</p>
            <p>Collaborations</p>
            <p>Promotions</p>
            <p>Forum</p>
            <p>Office Address</p>
          </div>
          <div className="column">
            <p>career@revnitro.com</p>
            <p>business@revnitro.com</p>
            <p>escalations@revnitro.com</p>
            <p>forum@revnitro.com</p>
            <p>185/262, 2nd Floor, N.M Road, Avadi, <br/>Chennai - 600054</p>
          </div>
        </div>
      </div>
      <div className="EscalationButtonsFlexdiffjf">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            RevNitro Escalation Desk: Get Your Concerns Resolved Quickly
          </title>

          <meta
            name="description"
            content="Unsatisfied with a RevNitro customer service interaction? Our Escalation Desk is here to help! We offer dedicated representatives, thorough investigations, and fair resolutions. Contact us today."
          />
        </Helmet>

        <button
          className="ButtExcsjgdfbbmhfj"
          onClick={() => handleButtonClick(1)}
          style={{
            backgroundColor: activeContainer === 1 ? "#232B70" : "#fff",
            color: activeContainer === 1 ? "white" : "black",
          }}
        >
          Apply Job
        </button>
        <button
          className="ButtExcsjgdfbbmhfj"
          onClick={() => handleButtonClick(2)}
          style={{
            backgroundColor: activeContainer === 2 ? "#232B70" : "#fff",
            color: activeContainer === 2 ? "white" : "black",
          }}
        >
          Buisness Collaboration
        </button>
        <button
          className="ButtExcsjgdfbbmhfj"
          onClick={() => handleButtonClick(3)}
          style={{
            backgroundColor: activeContainer === 3 ? "#232B70" : "#fff",
            color: activeContainer === 3 ? "white" : "black",
          }}
        >
          Escalation
        </button>
        <button
          className="ButtExcsjgdfbbmhfj"
          onClick={() => handleButtonClick(4)}
          style={{
            backgroundColor: activeContainer === 4 ? "#232B70" : "#fff",
            color: activeContainer === 4 ? "white" : "black",
          }}
        >
          Ownership Review
        </button>
      </div>

      <div style={{ display: activeContainer === 1 ? "block" : "none" }}>
        <ApplyJob />
      </div>
      <div style={{ display: activeContainer === 2 ? "block" : "none" }}>
        <BusinessColobration />
      </div>
      <div style={{ display: activeContainer === 3 ? "block" : "none" }}>
        <Escalationforms />
      </div>
      <div style={{ display: activeContainer === 4 ? "block" : "none" }}>
        <OwnerShipReview />
      </div>
    </div>
  );
};

export default Escalation;
