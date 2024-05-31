import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../global";
import { Helmet } from "react-helmet";

const BusinessColobration = () => {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    personname: "",
    companyName: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    details: "",
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
      const response = await axios.post(
        `${url}/businessCollabration`,
        formDetails
      );

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          personname: "",
          companyName: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          details: "",
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
        <div className="carpurchaseform">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              RevNitro: Partner with a Leading Automotive Service Provider.
            </title>
            <meta
              name="description"
              content="Elevate your business with RevNitro! Explore partnership opportunities for fleet management, corporate service plans (tags: corporate car service), and more. Boost efficiency & customer satisfaction. Contact us today!"
            />
          </Helmet>
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <h3 className="whatdoyuwanttobuy">Buisness Collaboration</h3>

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
                    type="text"
                    placeholder="Company Name"
                    name="Company Name"
                    value={formDetails.companyName}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        companyName: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Company Name</label>
                  <input
                    type="text"
                    name="Company Name"
                    value={formDetails.companyName}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        companyName: e.target.value,
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
                  <label for="Name">Mobile Number</label>
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
                    placeholder="More Details"
                    value={formDetails.details}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        details: e.target.value,
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
                    value={formDetails.details}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        details: e.target.value,
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

export default BusinessColobration;
