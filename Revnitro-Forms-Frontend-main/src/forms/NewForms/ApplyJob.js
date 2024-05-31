import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../global";
import { Helmet } from "react-helmet";

const ApplyJob = () => {
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    jobTitle: "SEO",
    jobtype: "Free Lancer",
    personname: "",
    age: "",
    email: "",
    phoneNo: "",
    location: "",
    address: "",
    resume: "",
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
      const response = await axios.post(`${url}/applyJob`, formDetails);

      if (response.data) {
        setLoading(false);
        alert("Your request has been successfully sent");
        setFormDetails({
          jobtype: "",
          jobTitle: "",
          personname: "",
          age: "",
          email: "",
          phoneNo: "",
          location: "",
          address: "",
          resume: "",
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
      <div className="carpurchaseform">
        <Helmet>
          <meta charSet="utf-8" />
          <title>RevNitro Careers: Join Our Passionate Team!</title>
          <meta
            name="description"
            content="Launch your career at RevNitro! Explore open positions & internships across various departments. We offer a dynamic work environment & opportunities for growth. Apply today!"
          />
        </Helmet>
        <div
          class="content active"
          id="content1"
          style={{ textDecoration: "none" }}
        >
          <div class="form-container">
            <form onSubmit={handleSubmit}>
              <h3 className="whatdoyuwanttobuy">Apply Job / Internship</h3>
              <h2>Job Type</h2>
              <div class="form-group">
                <select
                  name="Applied for Job"
                  class="selecteres"
                  required
                  value={formDetails.jobtype}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      jobtype: e.target.value,
                    })
                  }
                >
                  {/* <option value="New Car">New Car</option>
                  <option value="Pre owned Car">Pre owned Car</option> */}
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="Free Lancer">Free Lancer</option>
                  <option value="Internship">Internship</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Full Time">Full Time</option>
                </select>
              </div>
              <h2>Job Categories</h2>

              <div class="form-group">
                <select
                  name="Applied for Job"
                  class="selecteres"
                  required
                  value={formDetails.jobTitle}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      jobTitle: e.target.value,
                    })
                  }
                >
                  {/* <option value="New Car">New Car</option>
                  <option value="Pre owned Car">Pre owned Car</option> */}
                  <option value="Select From DropDown" disabled>
                    Select From DropDown
                  </option>
                  <option value="SEO">SEO</option>
                  <option value="VFX Artist">VFX Artist</option>
                  <option value="Marketing Operation">
                    Marketing Operation
                  </option>
                  <option value="Sales Repetitive">Sales Repetitive</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Editor">Editor</option>
                  <option value="Camera Man">Camera Man</option>
                  <option value="Content Mangement">Content Mangement</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="VJ">VJ</option>
                  <option value="RJ">RJ</option>
                  <option value="Bike Techinician">Bike Techinician</option>
                  <option value="Car Techinician">Car Techinician</option>
                  <option value="Automobile Painter">Automobile Painter</option>
                  <option value="Bike Accessories Fiter">
                    Bike Accessories Fiter
                  </option>
                  <option value=" ECU & Electronic technician">
                    ECU & Electronic technician
                  </option>
                </select>
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
                  type="number"
                  placeholder="Age"
                  name="Age"
                  value={formDetails.age}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, age: e.target.value })
                  }
                  required
                />
              </div> */}
              <div class="form-group">
                <label for="Name">Age</label>
                <input
                  class="no-spin"
                  type="number"
                  name="Age"
                  value={formDetails.age}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, age: e.target.value })
                  }
                  required
                />
              </div>
              {/* <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Mobile No"
                  name="Mobile No"
                  value={formDetails.phoneNo}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, phoneNo: e.target.value })
                  }
                  required
                />
              </div> */}
              <div class="form-group">
                <label for="Name">Mobile No</label>
                <input
                  class="no-spin"
                  type="number"
                  name="Mobile No"
                  value={formDetails.phoneNo}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, phoneNo: e.target.value })
                  }
                  required
                />
              </div>
              {/* <div className="inputboxforcarpurchase">
                <input
                  type="email"
                  placeholder="Email Id"
                  name="Email Id"
                  value={formDetails.email}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, email: e.target.value })
                  }
                  required
                />
              </div> */}
              <div class="form-group">
                <label for="Name">Email</label>
                <input
                  type="email"
                  name="Email Id"
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
                    setFormDetails({ ...formDetails, location: e.target.value })
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
                    setFormDetails({ ...formDetails, location: e.target.value })
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
                    setFormDetails({ ...formDetails, address: e.target.value })
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
                    setFormDetails({ ...formDetails, address: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              {/* <div className="inputboxforcarpurchase">
                <input
                  type="text"
                  placeholder="Link of Resume or Portfolio"
                  name="resume"
                  value={formDetails.resume}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, resume: e.target.value })
                  }
                />
              </div> */}

              <div class="form-group">
                <label for="Name">Link of Resume or Portfolio</label>
                <input
                  type="text"
                  name="resume"
                  value={formDetails.resume}
                  onChange={(e) =>
                    setFormDetails({ ...formDetails, resume: e.target.value })
                  }
                  required
                />
              </div>

              {/* <div className="form-group">
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
  );
};

export default ApplyJob;
