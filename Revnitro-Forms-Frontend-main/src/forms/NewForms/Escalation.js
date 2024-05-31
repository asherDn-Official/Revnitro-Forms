import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../global";
import { Helmet } from "react-helmet";

const Escalationforms = () => {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    service: "",
    tieupPerson: "",
    issueFaced: "",
    personname: "",
    email: "",
    phoneNo: "",
    location: "",
    address: "",
    // bikeType: "Select From DropDown",
    // bikename: "Select From DropDown",
    // personname: "",
    // phoneNo: "",
    // email: "",
    // location: "",
    // address: "",
    // question: "",
    // time: "Select From DropDown",
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios.get(`${url}/`);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowNotification(true);
    setLoading(true);

    try {
      const response = await axios.post(`${url}/escalation`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          service: "",
          tieupPerson: "",
          issueFaced: "",
          personname: "",
          email: "",
          phoneNo: "",
          location: "",
          address: "",
        });
      } else {
        setLoading(false);
        alert("There is some internal error. Try again");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert(
        "There was an error processing your request. Please try again later."
      );
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div>
      <div>
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
        <div className="carpurchaseform">
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <h3 className="whatdoyuwanttobuy">Escalation Desk</h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="Company"
                    id=""
                    required
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        service: e.target.value,
                      })
                    }
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Bike Service Booking">
                      Bike Service Booking
                    </option>
                    <option value="Bike Consultation">Bike Consultation</option>
                    <option value="Car Consultation">Car Consultation</option>
                    <option value="Car ServiceBooking">
                      Car Service Booking
                    </option>
                    <option value="Ecu Tuning">Ecu Tuning</option>
                    <option value="Racing">Racing</option>
                  </select>
                </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    class="selecteres"
                    name="Escalation For"
                    required
                    value={formDetails.cartype}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        cartype: e.target.value,
                      })
                    }
                  >
                    {/* <option value="New Car">New Car</option>
                  <option value="Pre owned Car">Pre owned Car</option> */}
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Bike Service Booking">
                      Bike Service Booking
                    </option>
                    <option value="Bike Consultation">Bike Consultation</option>
                    <option value="Car Consultation">Car Consultation</option>
                    <option value="Car ServiceBooking">
                      Car Service Booking
                    </option>
                    <option value="Ecu Tuning">Ecu Tuning</option>
                    <option value="Racing">Racing</option>
                  </select>
                </div>
                {/* 
                <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Person Who Handled"
                    name="Name"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        tieupPerson: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Person Who Handled</label>
                  <input
                    type="text"
                    name="Person Who Handled"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        tieupPerson: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                {/* 
                <div className="textatreaadressform">
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    name="Address"
                    placeholder="Describe Your Issue"
                    value={formDetails.issueFaced}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        issueFaced: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div> */}

                <div class="form-group">
                  <label for="Address">Describe Your Issue</label>
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    name="Describe Your Issue"
                    value={formDetails.issueFaced}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        issueFaced: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
                <h2>Tell about yourselves</h2>
                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={formDetails.personname}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        personname: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formDetails.personname}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        personname: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {/* <div className="inputboxforcarpurchase">
                  <input
                    class="no-spin"
                    type="number"
                    placeholder="Mobile No"
                    name="Mobile number"
                    value={formDetails.phoneNo}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        phoneNo: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Mobile No</label>
                  <input
                    class="no-spin"
                    type="number"
                    name="Mobile number"
                    value={formDetails.phoneNo}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        phoneNo: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="email"
                    placeholder="Email Id"
                    name="Email"
                    value={formDetails.email}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, email: e.target.value })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Email Id</label>
                  <input
                    type="email"
                    name="Email"
                    value={formDetails.email}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, email: e.target.value })
                    }
                    required
                  />
                </div>
                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Location"
                    name="Location"
                    value={formDetails.location}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        location: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Location</label>
                  <input
                    type="text"
                    name="Location"
                    value={formDetails.location}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        location: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {/* <div className="textatreaadressform">
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    name="Address"
                    placeholder="Address"
                    value={formDetails.address}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        address: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div> */}
                <div class="form-group">
                  <label for="Address">Address</label>
                  <textarea
                    id=""
                    cols="30"
                    rows="10"
                    name="Address"
                    value={formDetails.address}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        address: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>

                {/* <div className="carspurchasebuuttonss">
                  <button type="submit">Submit</button>
                </div> */}
                <div
                  className="form-buttoncentre"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="form-group">
                    <input
                      type="submit"
                      value={loading ? "Submitting..." : "Submit"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escalationforms;
