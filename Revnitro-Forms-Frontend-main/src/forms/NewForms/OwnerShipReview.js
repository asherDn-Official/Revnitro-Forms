import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../global";
import { Helmet } from "react-helmet";

const OwnerShipReview = () => {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    type: "",
    model: "",
    year: "",
    personname: "",
    email: "",
    phoneNo: "",
    location: "",
    address: "",
    slotDate: "",
    slotTime: "",
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
      const response = await axios.post(`${url}/ownershipReview`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          type: "",
          model: "",
          year: "",
          personname: "",
          email: "",
          phoneNo: "",
          location: "",
          address: "",
          slotDate: "",
          slotTime: "",
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

  // Get current date and time
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div>
      <div>
        {/* ///////////////////////////////4 */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            RevNitro Ownership Review: Is It Worth Buying a Car From Them?
          </title>
          <meta
            name="description"
            content="Considering buying a car from RevNitro? Read my honest review! Explore their selection, buying process, customer service, and more. Decide if RevNitro is the right fit for you!"
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
                <h3 className="whatdoyuwanttobuy">
                  Ownership Review for Bike or Car
                </h3>
                {/* <div className="dropdwoninputforrevnbitrto">
                  <select
                    name="Company"
                    id=""
                    required
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, type: e.target.value })
                    }
                  >
                    <option value="Select From DropDown" disabled>
                      Select From DropDown
                    </option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                  </select>
                </div> */}
                <div class="form-group">
                  {/* <label for="job-category">Job Category</label> */}
                  <select
                    name="Ownership Review for Bike and Car "
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
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    {/* <option value="New Car">New Car</option>
                  <option value="Pre owned Car">Pre owned Car</option> */}
                  </select>
                </div>
                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="text"
                    placeholder="Model"
                    name="Model"
                    value={formDetails.model}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, model: e.target.value })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Model</label>
                  <input
                    type="text"
                    name="Model"
                    value={formDetails.model}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, model: e.target.value })
                    }
                    required
                  />
                </div>

                {/* <div className="inputboxforcarpurchase">
                  <input
                    class="no-spin"
                    type="number"
                    placeholder="Year"
                    name="Year"
                    value={formDetails.year}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, year: e.target.value })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Year</label>
                  <input
                    class="no-spin"
                    type="number"
                    name="Year"
                    value={formDetails.year}
                    onChange={(e) =>
                      setFormDetails({ ...formDetails, year: e.target.value })
                    }
                    required
                  />
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
                <h2>Avaliable Date and Time</h2>
                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="date"
                    placeholder="Available Date"
                    name="Location"
                    value={formDetails.slotDate}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        slotDate: e.target.value,
                      })
                    }
                    min={currentDate} // Set min attribute to current date
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Available Date</label>
                  <input
                    type="date"
                    name="Available Date"
                    value={formDetails.slotDate}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        slotDate: e.target.value,
                      })
                    }
                    min={currentDate} // Set min attribute to current date
                    required
                  />
                </div>

                {/* <div className="inputboxforcarpurchase">
                  <input
                    type="time"
                    placeholder="Avalibale Date"
                    name="Location"
                    value={formDetails.slotTime}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        slotTime: e.target.value,
                      })
                    }
                    required
                  />
                </div> */}
                <div class="form-group">
                  <label for="Name">Avalibale Time</label>
                  <input
                    type="time"
                    placeholder="Avalibale Time"
                    name="Location"
                    value={formDetails.slotTime}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        slotTime: e.target.value,
                      })
                    }
                    required
                  />
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

export default OwnerShipReview;
