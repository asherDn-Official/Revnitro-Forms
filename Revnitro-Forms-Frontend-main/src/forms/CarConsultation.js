import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "./global";
import { Helmet } from "react-helmet";

function CarConsultation() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [formDetails, setFormDetails] = useState({
    cartype: "Select From DropDown",
    carname: "Select From DropDown",
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
    setLoading(true);

    e.preventDefault();
    setShowNotification(true);

    try {
      const response = await axios.post(`${url}/car`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          cartype: "Select From DropDown",
          carname: "Select From DropDown",
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
        <div className="firstsectionformscarpurchased">
          <Helmet>
            <meta charSet="utf-8" />
            <title>REVNITRO - Car Purchase Consultation</title>
            <meta
              name="description"
              content="Considering buying a car? Get a car purchase consultation with REVNITRO! Our experts help you find the perfect car & negotiate the best deal. Start your car buying journey informed!"
            />
            {/* <link
              rel="canonical"
              href="https://forms.revnitro.com/CarConsultation"
            /> */}
          </Helmet>
          <div className="formsLogoflex"></div>
          <h1 className="centerheadineg">CAR PURCHASE CONSULTATION</h1>
          <div
            class="content active"
            id="content1"
            style={{ textDecoration: "none" }}
          >
            <div class="form-container">
              <form onSubmit={handleSubmit}>
                <h3 className="whatdoyuwanttobuy">
                  Looking for : New Car or Pre owned Car
                </h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                <select
                  name="This-Form-for-Car-Purchase-Consultation"
                  id=""
                  required
                  value={formDetails.cartype}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      cartype: e.target.value,
                    })
                  }
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="New Car">New Car</option>
                  <option value="Pre owned Car">Pre owned Car</option>
                </select>
              </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="This-Form-for-Car-Purchase-Consultation"
                    id=""
                    class="selecteres"
                    required
                    value={formDetails.cartype}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        cartype: e.target.value,
                      })
                    }
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="New Car">New Car</option>
                    <option value="Pre owned Car">Pre owned Car</option>
                  </select>
                </div>
                <h3 className="whatdoyuwanttobuy">What do you want to buy ?</h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                <select
                  name="Car Company"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      carname: e.target.value,
                    })
                  }
                  id=""
                  required
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="Maruti Suzuki">Maruti</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tata Motors">Tata</option>
                  <option value="Mahindra & Mahindra">Mahindra</option>
                </select>
              </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="Car Company"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        carname: e.target.value,
                      })
                    }
                    id=""
                    class="selecteres"
                    required
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Maruti Suzuki">Maruti</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Tata Motors">Tata</option>
                    <option value="Mahindra & Mahindra">Mahindra</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="formscheckboxxxx" className="formforrevnitro">
                    <input
                      type="checkbox"
                      id="formscheckboxxxx"
                      onClick={() => setToggle(!toggle)}
                    />
                    <span className="formrevnitroround">
                      <h3>If Other Please Specify</h3>
                    </span>
                  </label>
                </div>

                {toggle && (
                  <div>
                    {/* <div className="inputboxforcarpurchase">
                    <input
                      type="text"
                      value={formDetails.carname}
                      name="Car Company"
                      placeholder="Company Name"
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          carname: e.target.value,
                        })
                      }
                    />
                  </div> */}
                    <div class="form-group">
                      <label for="name">Company Name</label>
                      <input
                        type="text"
                        // placeholder="Company Name"
                        // value={formDetails.carname}
                        name="Car Company"
                        // placeholder="Company Name"
                        onChange={(e) =>
                          setFormDetails({
                            ...formDetails,
                            carname: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}
                <h1>Tell about yourselves</h1>
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
                  <label for="name">Name</label>
                  <input
                    type="text"
                    // placeholder="Name"
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
                  <label for="number">Mobile Number</label>
                  <input
                    class="no-spin"
                    type="number"
                    // placeholder="Phone No"
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
                  <label for="Location">Email</label>
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
                  <label for="name">Location</label>
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
                  required
                ></textarea>
              </div> */}
                <div class="form-group">
                  <label for="Address">Address</label>
                  <textarea
                    name="Address"
                    id=""
                    cols="30"
                    rows="10"
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
                    What Questions do you have regarding your Car purchase ?
                  </label>

                  {/* <div className="textareacarconsiltationform">
                  <textarea
                    name="Questions in Car Purchase"
                    id=""
                    cols="30"
                    rows="10"
                    required
                    value={formDetails.question}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        question: e.target.value,
                      })
                    }
                  ></textarea>
                  
                </div> */}
                  <div class="form-group">
                    {/* <label for="Address">Address</label> */}
                    <textarea
                      name="Questions in Car Purchase"
                      id=""
                      cols="30"
                      rows="10"
                      required
                      value={formDetails.question}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          question: e.target.value,
                        })
                      }
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
                    setFormDetails({
                      ...formDetails,
                      time: e.target.value,
                    })
                  }
                  required
                >
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="10:00 am - 1:00 pm">10:00 am - 1:00 pm</option>
                  <option value="01:00 pm - 5:00 pm">01:00 pm - 5:00 pm</option>
                  <option value="06:00 pm - 8:00 pm">06:00 pm - 8:00 pm</option>
                </select>
              </div> */}
                <div class="form-group">
                  <select
                    name="Timing"
                    id=""
                    class="selecteres"
                    value={formDetails.time}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        time: e.target.value,
                      })
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
                  <span style={{ fontSize: "17px" }}>
                    I acknowledge this will be a paid consultation.
                  </span>
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

export default CarConsultation;
