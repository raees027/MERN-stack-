import { useActionState, useState } from "react";
import "./App.css";

function App() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });
  const [errorFields, setErrorFeilds] = useState({
    name: false,
    email: false,
    gender: false,
    country: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);

    if (isFormValidOnSubmit()) {
      console.log("valid");
      return;
    }
    return console.log("invalid");
  };

  // form validation first method
  //onsubmit
  // const isFormValid = () => {
  //   if (fields.name === "") {
  //     setErrorFeilds((prev) => ({
  //       ...prev,
  //       name: true,
  //     }));
  //     return false;
  //   } else {
  //     setErrorFeilds((prev) => ({
  //       ...prev,
  //       name: false,
  //     }));
  //     return true;
  //   }
  // };

  //solution 2 on submit

  const isFormValidOnSubmit = () => {
    const errors = {
      name: false,
      email: false,
      gender: false,
      country: false,
    };
    if (fields.name === "") {
      errors.name = true;
    }
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.country === "") {
      errors.country = true;
    }
    console.log(errors);
    setErrorFeilds(errors);
    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }
    return true;
  };

  //onblur
  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;
    if (name === "name" && value === "") {
      error = true;
    } else if (
      (name === "email" && value === "") ||
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        value
      )
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }

    setErrorFeilds((prev) => ({
      ...prev,
      [name]: error,
    }));
  };
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    isFormValidOnBlur(event);
  };
  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];
    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== event.target.value);
    }
    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
    isFormValidOnBlur(event);
  };

  // const handleBLur = (event) => {
  //   setFields((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  console.log(fields, "==fields");

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="home-section-container">
          <h1>Register</h1>
          <p className="caption">Please fill the form.</p>
          <div className="name-section">
            <label htmlFor="name">
              Name <span className="danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
              //onBlur={handleBLur}
            />
            {errorFields.name && <p className="danger">Name is required.</p>}
          </div>
          <div className="email-section">
            <label htmlFor="email">
              Email <span className="danger">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            {errorFields.email && <p className="danger">Email is required.</p>}
          </div>
          <div className="gender-section">
            <label htmlFor="">Gender</label>
            <div className="gender-card">
              <label className="radio-buttons" htmlFor="male">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={handleChange}
                onBlur={isFormValidOnBlur}
              />
              <label className="radio-buttons" htmlFor="female">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={handleChange}
                onBlur={isFormValidOnBlur}
              />

              {errorFields.gender && (
                <p className="danger">Gender is required.</p>
              )}
            </div>
          </div>
          <div className="country-section">
            <label htmlFor="">Country</label>
            <select
              name="country"
              id=""
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            >
              <option value="default">Select</option>
              <option value="india">India</option>
              <option value="qatar">Qatar</option>
              <option value="spain">Spain</option>
            </select>

            {errorFields.country && (
              <p className="danger">Country is required.</p>
            )}
          </div>

          <div className="gender-section">
            <label htmlFor="">Skills</label>
            <div className="gender-card">
              <label className="radio-buttons" htmlFor="javascript">
                Javascript
              </label>
              <input
                type="checkbox"
                name="skills"
                value="javascript"
                id="javascript"
                onChange={handleCheckbox}
                onBlur={isFormValidOnBlur}
              />
              <label className="radio-buttons" htmlFor="react">
                React
              </label>
              <input
                type="checkbox"
                name="skilss"
                value="react"
                id="react"
                onChange={handleCheckbox}
                onBlur={isFormValidOnBlur}
              />
              <label className="radio-buttons" htmlFor="angular">
                Angular
              </label>
              <input
                type="checkbox"
                name="skilss"
                value="angular"
                id="angular"
                onChange={handleCheckbox}
                onBlur={isFormValidOnBlur}
              />

              {errorFields.gender && (
                <p className="danger">Skills are required.</p>
              )}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
