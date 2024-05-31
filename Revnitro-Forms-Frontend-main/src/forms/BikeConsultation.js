import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";
import { Helmet } from "react-helmet";

function BikeConsultation() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formDetails, setFormDetails] = useState({
    bikeType: "Select From DropDown",
    bikename: "Select From DropDown",
    personname: "",
    phoneNo: "",
    email: "",
    location: "",
    address: "",
    question: "",
    time: "Select From DropDown",
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
      const response = await axios.post(`${url}/bike`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          bikeType: "Select From DropDown",
          bikename: "Select From DropDown",
          personname: "",
          phoneNo: "",
          email: "",
          location: "",
          address: "",
          question: "",
          time: "Select From DropDown",
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
          <title>REVNITRO - Bike Purchase Consultation</title>
          <meta
            name="description"
            content="Considering buying a motorcycle? Get a bike purchase consultation with REVNITRO! Our experts help you find the perfect bike & negotiate the best deal. Ride with confidence - start your journey at REVNITRO!"
          />
          {/* <link
            rel="canonical"
            href="https://forms.revnitro.com/BikeConsultation"
          /> */}
        </Helmet>
        <div className="firstsectionformscarpurchased">
          <div className="formsLogoflex"></div>
          <h1 className="centerheadineg">BIKE PURCHASE CONSULTATION</h1>
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <h3 className="whatdoyuwanttobuy">
                  Looking for : New Bike or Pre owned Bike
                </h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="(This-is-Bike-Purchase-Consultation-Form) :"
                    id=""
                    value={formDetails.bikeType}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        bikeType: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="New bike">New Bike</option>
                    <option value="Pre owned bike">Pre owned Bike</option>
                  </select>
                </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="(This-is-Bike-Purchase-Consultation-Form) :"
                    id=""
                    class="selecteres"
                    value={formDetails.bikeType}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        bikeType: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="New bike">New Bike</option>
                    <option value="Pre owned bike">Pre owned Bike</option>
                  </select>
                </div>

                <h3 className="whatdoyuwanttobuy">What do you want to buy ?</h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="Bike Company"
                    id=""
                    required
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        bikename: e.target.value,
                      })
                    }
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="TVS">TVS</option>
                    <option value="BAJAJ">BAJAJ</option>
                    <option value="KTM">KTM</option>
                    <option value="YAMAHA">YAMAHA</option>
                    <option value="ROYAL ENFIELD">ROYAL ENFIELD</option>
                    <option value="HONDA">HONDA</option>
                    <option value="TRUIMPH">TRUIMPH</option>
                    <option value="HERO">HERO</option>
                    <option value="SUZUKI">SUZUKI</option>
                    <option value="ATHER">ATHER</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="Bike Company"
                    id=""
                    class="selecteres"
                    required
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        bikename: e.target.value,
                      })
                    }
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="TVS">TVS</option>
                    <option value="BAJAJ">BAJAJ</option>
                    <option value="KTM">KTM</option>
                    <option value="YAMAHA">YAMAHA</option>
                    <option value="ROYAL ENFIELD">ROYAL ENFIELD</option>
                    <option value="HONDA">HONDA</option>
                    <option value="TRUIMPH">TRUIMPH</option>
                    <option value="HERO">HERO</option>
                    <option value="SUZUKI">SUZUKI</option>
                    <option value="ATHER">ATHER</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="formscheckboxxxx" className="formforrevnitro">
                    <input
                      type="checkbox"
                      id="formscheckboxxxx"
                      onClick={() => setToggle((prevToggle) => !prevToggle)}
                    />
                    <span className="formrevnitroround">
                      <h3>If Other Please Specify</h3>
                    </span>
                  </label>
                </div>

                {toggle && (
                  <div id="formsnotchecktickbox">
                    {/* <div className="inputboxforcarpurchase">
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formDetails.bikename}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            bikename: e.target.value,
                          })
                        }
                      />
                    </div> */}
                    <div class="form-group">
                      {/* <label for="name">Company Name</label> */}
                      <input
                        type="text"
                        name="Company Name"
                        //  placeholder="Company Name"
                        value={formDetails.bikename}
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            bikename: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}

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
                  <label for="name"> Name</label>
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
                  <label for="name">Mobile No</label>
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
                  <label for="name">Email Id</label>
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
                  <label for="name">Location</label>
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
                  <label for="name">Address</label>
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
                <div className="textareacontentsform">
                  <label htmlFor="">
                    What Questions do you have regarding your bike purchase ?
                  </label>

                  <div className="textareacarconsiltationform">
                    <textarea
                      name="Questions in Bike Purchase"
                      id=""
                      cols="30"
                      rows="10"
                      value={formDetails.question}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          question: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="callschdeuleforrevnito">
                  <h2>Call Schedule time :(Please Select One)</h2>
                </div>

                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="Timing"
                    id=""
                    value={formDetails.time}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, time: e.target.value })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="10:00 am - 1:00 pm">
                      10:00 am - 1:00 pm
                    </option>
                    <option value="01:00 pm - 5:00 pm">
                      01:00 pm - 5:00 pm
                    </option>
                    <option value="06:00 pm - 8:00 pm">
                      06:00 pm - 8:00 pm
                    </option>
                  </select>
                </div> */}
                <div class="form-group">
                  <select
                    name="Timing"
                    id=""
                    className="selecteres"
                    value={formDetails.time}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, time: e.target.value })
                    }
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="10:00 am - 1:00 pm">
                      10:00 am - 1:00 pm
                    </option>
                    <option value="01:00 pm - 5:00 pm">
                      01:00 pm - 5:00 pm
                    </option>
                    <option value="06:00 pm - 8:00 pm">
                      06:00 pm - 8:00 pm
                    </option>
                  </select>
                </div>
                <div class="disclaimer">
                  <input type="checkbox" id="formscheckboxxxx" required />
                  &nbsp;
                  <span>I acknowledge this will be a paid consultation.</span>
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

export default BikeConsultation;
