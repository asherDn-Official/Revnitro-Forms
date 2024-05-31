import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";
import { Helmet } from "react-helmet";

function EcuTuning() {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    vehiclename: "",
    vehiclemodel: "",
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    issues: "",
    servicelocation: "Select From DropDown",
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
      const response = await axios.post(`${url}/ecu`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          vehiclename: "",
          vehiclemodel: "",
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          issues: "",
          servicelocation: "Select From DropDown",
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
          <title>REVNITRO - Bike ECU Tuning</title>
          <meta
            name="description"
            content="Unlock your bike's true potential with REVNITRO's ECU tuning! Increase horsepower, improve performance & unleash the beast within. Get a free quote today!"
          />
          {/* <link rel="canonical" href="https://forms.revnitro.com/EcuTuning" /> */}
        </Helmet>
        <div className="firstsectionformscarpurchased">
          <div className="formsLogoflex"></div>
          <h1 className="centerheadineg">BOOK ECU TUNING</h1>
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <div id="formschecktickbox" style={{ display: "block" }}></div>
                <div id="formsnotchecktickbox" style={{ display: "none" }}>
                  <div className="inputboxforcarpurchase">
                    <input type="text" placeholder="Type the Company Name" />
                  </div>
                </div>

                {/* <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Name"
                  name="(This-is-ECU-Tuning-Form) Name:"
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
                  <label for="name"> Name</label>
                  <input
                    type="text"
                    name="(This-is-ECU-Tuning-Form) Name:"
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
                  type="number"
                  placeholder="Phone No"
                  name="Mobile Number"
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
                  <label for="name">Mobile Number</label>
                  <input
                    class="no-spin"
                    type="number"
                    name="Mobile Number"
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
                    setFormDetails({
                      ...formDetails,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div> */}
                <div class="form-group">
                  <label for="Email Id">Email Id</label>
                  <input
                    type="email"
                    // placeholder="Email Id"
                    name="Email"
                    value={formDetails.email}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        email: e.target.value,
                      })
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
                  <label for="Location">Location</label>
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
                    name="Address"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Address"
                    value={formDetails.address}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        address: e.target.value,
                      })
                    }
                  ></textarea>
                </div> */}
                <div class="form-group">
                  <label for="Address">Address</label>
                  <textarea
                    name="Address"
                    id=""
                    cols="30"
                    rows="10"
                    // placeholder="Address"
                    value={formDetails.address}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        address: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="bikeserviceformpage">
                  <h3>Bike Company</h3>
                  {/* <div className="inputboxforcarpurchase">
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="Company Name"
                      value={formDetails.vehiclename}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          vehiclename: e.target.value,
                        })
                      }
                      required
                    />
                  </div> */}
                  <div class="form-group">
                    <label for="Company Name">Company Name</label>
                    <input
                      type="text"
                      // placeholder="Company Name"
                      name="Company Name"
                      value={formDetails.vehiclename}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          vehiclename: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="bikeserviceformpage">
                  <h3>What model do you have ?</h3>
                  {/* <div className="inputboxforcarpurchase">
                    <input
                      type="text"
                      placeholder="Model"
                      name="Model Name"
                      value={formDetails.vehiclemodel}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          vehiclemodel: e.target.value,
                        })
                      }
                      required
                    />
                  </div> */}
                  <div class="form-group">
                    <label for="Model">Model</label>
                    <input
                      type="text"
                      name="Model Name"
                      value={formDetails.vehiclemodel}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          vehiclemodel: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="bikeserviceformpage">
                  <h3>Describe your issues</h3>
                  <textarea
                    name="Issues"
                    id=""
                    cols="30"
                    rows="10"
                    value={formDetails.issues}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        issues: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>

                <div className="callschdeuleforrevnito">
                  <h2>Service Location</h2>
                </div>

                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="Location"
                    value={formDetails.servicelocation}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        servicelocation: e.target.value,
                      })
                    }
                    id=""
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div> */}
                <div class="form-group">
                  <select
                    name="Location"
                    className="selecteres"
                    value={formDetails.servicelocation}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        servicelocation: e.target.value,
                      })
                    }
                    id=""
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                <div class="disclaimer">
                  Note : We are not providing service directly you will be
                  redirected to our partners
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
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            zIndex: "9999",
          }}
        >
          <p>Wait for some time. This process will take about a minute.</p>
        </div>
      )}
    </div>
  );
}

export default EcuTuning;
