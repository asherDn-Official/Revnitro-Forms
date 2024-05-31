import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";
import { Helmet } from "react-helmet";

function BikeServiceBooking() {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    bikename: "",
    bikemodel: "",
    issues: "",
    serviceLocation: "Select From DropDown",
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
      const response = await axios.post(`${url}/bikeService`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          bikename: "",
          bikemodel: "",
          issues: "",
          serviceLocation: "Select From DropDown",
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
          <title>REVNITRO - Bike Service Booking</title>
          <meta
            name="description"
            content="Need a reliable bike service? Book your appointment with REVNITRO, your authorized service center for top-notch motorcycle maintenance. Get a free quote today!"
          />
          {/* <link
            rel="canonical"
            href="https://forms.revnitro.com/BikeServiceBooking"
          /> */}
        </Helmet>
        <div class="firstsectionformscarpurchased">
          <div class="formsLogoflex"></div>
          <h1 className="centerheadineg">BIKE BOOK SERVICE</h1>
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <div id="formschecktickbox" style={{ display: "none" }}></div>
                <div id="formsnotchecktickbox" style={{ display: "none" }}>
                  <div class="inputboxforcarpurchase">
                    <input type="text" placeholder="Type the Company Name" />
                  </div>
                </div>

                {/* <div class="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Name"
                    name="(This-is-Bike-Book-Service-Form) Name :"
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
                  <label for="name">Name</label>
                  <input
                    type="text"
                    // placeholder="Name"
                    name="(This-is-Bike-Book-Service-Form) Name :"
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

                {/* <div class="inputboxforcarpurchase">
                  <input
                    type="number"
                    placeholder="Phone No"
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
                  <label for="number">Mobile Number</label>
                  <input
                    class="no-spin"
                    type="number"
                    // placeholder="Phone No"
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
                {/* <div class="inputboxforcarpurchase">
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
                  <label for="Location">Email</label>
                  <input
                    type="email"
                    // placeholder="Email Id"
                    name="Email"
                    value={formDetails.email}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, email: e.target.value })
                    }
                    required
                  />
                </div>
                {/* <div class="inputboxforcarpurchase">
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
                    // placeholder="Location"
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
                {/* <div class="textatreaadressform">
                  <textarea
                    name="Address"
                    id=""
                    cols="30"
                    rows="10"
                    required
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
                    required
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
                <div class="bikeserviceformpage">
                  <h3 className="hthree">What bike do you have ?</h3>
                  {/* <div class="inputboxforcarpurchase">
                    <input
                      type="text"
                      placeholder="Bike Company"
                      name="Bike Company"
                      value={formDetails.bikename}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          bikename: e.target.value,
                        })
                      }
                      required
                    />
                  </div> */}
                  <div class="form-group">
                    <label for="Car Company">bike Company</label>
                    <input
                      type="text"
                      // placeholder="Bike Company"
                      name="Bike Company"
                      value={formDetails.bikename}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          bikename: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div class="bikeserviceformpage">
                  <h3 className="hthree">What model do you have ?</h3>
                  {/* <div class="inputboxforcarpurchase">
                    <input
                      type="text"
                      placeholder="Model"
                      name="Model"
                      value={formDetails.bikemodel}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          bikemodel: e.target.value,
                        })
                      }
                      required
                    />
                  </div> */}
                  <div class="form-group">
                    <label for="bike Model">bike Model</label>
                    <input
                      type="text"
                      //  placeholder="Model"
                      name="Model"
                      value={formDetails.bikemodel}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          bikemodel: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div class="bikeserviceformpage">
                  <h3 className="hthree">Describe your issues</h3>
                  {/* <textarea
                    name="issues"
                    id=""
                    cols="30"
                    rows="10"
                    value={formDetails.issues}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, issues: e.target.value })
                    }
                    required
                  ></textarea> */}
                  <div class="form-group">
                    {/* <label for="bike Model">bike Model</label> */}
                    <textarea
                      name="issues"
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
                </div>

                <div class="callschdeuleforrevnito">
                  <h2>Service Location</h2>
                </div>

                {/* <div class="dropdwoninputforrevnbitrto">
                  <select
                    name="Service Loacation"
                    id=""
                    value={formDetails.serviceLocation}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        serviceLocation: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Chennai - Ponamalle">
                      Chennai - Ponamalle
                    </option>
                    <option value="Trichy">Trichy</option>
                  </select>
                </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="Service Loacation"
                    id=""
                    class="selecteres"
                    value={formDetails.serviceLocation}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        serviceLocation: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Chennai - Ponamalle">
                      Chennai - Ponamalle
                    </option>
                    <option value="Trichy">Trichy</option>
                  </select>
                </div>

                <div class="disclaimer">
                  Note : We are not providing service directly you will be
                  redirected to our partners
                </div>

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
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
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

export default BikeServiceBooking;
