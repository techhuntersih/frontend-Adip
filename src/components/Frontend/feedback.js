import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import './feedback.css';


function Feedback() {

  // const [error, setError] = useState(null);


  const onSubmit = (values, submittingObject) => {
      console.log(values);
      submittingObject.resetForm();
    };
    
  
  const formik = useFormik({


    initialValues: {
      name: "",
      ema: "",
      Contact: "",
      Case: "",
      Name: "",
      Feedback: "",
      Childs: "",
      typ: "",
      Suggestion: "",
    },  validateOnBlur: true,

    onSubmit,
    validationSchema: Yup.object({
     
      name: Yup.string().required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      ema: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      Contact: Yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"Contact Number is invalid").max(10).required("Contact Number is required"),
      Case: Yup.number().required("Case Number is required"),
      Name: Yup.string().required("Name is required"),
      Feedback: Yup.string().required("Feedback is required"),
      Childs: Yup.string().required("Childs Improvement is required"),
      Suggestion: Yup.string().required("Suggestion  is required"),
    }),
   

  });
  

  return (
    <div className="container form">
      <form className="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              pattern="^[A-Za-z -]+$"
              title="Please Enter Valid Name"
            />{" "}
            {formik.errors.name && formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}{" "}
          </div>

          <div className="col-lg-6 col-12">
            <label>Email Id:</label>
            <input
              type="email"
              name="ema"
              onChange={formik.handleChange}
              value={formik.values.ema}
            />{" "}
            {formik.errors.ema && formik.touched.ema ? (
              <div className="error">{formik.errors.ema}</div>
            ) : null}{" "}
          </div>
          <div className="col-lg-6 col-12">
            <label>Contact Numbers</label>
            <input
              type="text"
              name="Contact"
              onChange={formik.handleChange}
              value={formik.values.Contact}
              maxLength={10}
             
              title="Please Enter Valid Number"
            />{" "}
            {formik.errors.Contact && formik.touched.Contact ? (
              <div className="error">{formik.errors.Contact}</div>
            ) : null}{" "}
          </div>
          <div className="col-lg-6 col-12">
            <label>Case Number of the Cochlear Implantee</label>
            <input
              type="number"
              name="Case"
              title="Please Enter Valid Number"
              onChange={formik.handleChange}
              value={formik.values.Case}
            />{" "}
            {formik.errors.Case && formik.touched.Case ? (
              <div className="error">{formik.errors.Case}</div>
            ) : null}{" "}
          </div>
          <div className="col-lg-6 col-12">
            <label>Name of the Cochlear Implantee</label>
            <input
              type="text"
              name="Name"
              onChange={formik.handleChange}
              value={formik.values.Name}
              pattern="^[A-Za-z -]+$"
              title="Please Enter Valid Name"
            />{" "}
            {formik.errors.Name && formik.touched.Name ? (
              <div className="error">{formik.errors.Name}</div>
            ) : null}{" "}
          </div>

          <div className="col-lg-12 col-12">
            <label>Feedback about the surgery :</label>

            <textarea
              type="text"
              name="Feedback"
              onChange={formik.handleChange}
              value={formik.values.Feedback}
            ></textarea>

            {formik.errors.Feedback && formik.touched.Feedback ? (
              <div className="error">{formik.errors.Feedback}</div>
            ) : null}
          </div>
          <div className="col-lg-12 col-12">
            <label>Childs Improvement in Communication :</label>

            <textarea
              type="text"
              name="Childs"
              onChange={formik.handleChange}
              value={formik.values.Childs}
            ></textarea>

            {formik.errors.Childs && formik.touched.Childs ? (
              <div className="error">{formik.errors.Childs}</div>
            ) : null}
          </div>
          <div className="col-lg-12 col-12">
            <label>Suggestion /Requirement :</label>

            <textarea
              type="text"
              name="Suggestion"
              onChange={formik.handleChange}
              value={formik.values.Suggestion}
            ></textarea>

            {formik.errors.Suggestion && formik.touched.Suggestion ? (
              <div className="error">{formik.errors.Suggestion}</div>
            ) : null}
          </div>
          <div className="col-12 txt-center">
            <Button variant="contained" type="submit" value="Submit" onClick={formik.handleSubmit}>Submit</Button>
            <Button
              variant="contained"
              type="reset"
              value="Reset"
              onClick={formik.handleReset}
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;