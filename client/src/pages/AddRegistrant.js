import React from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import { Redirect } from "react-router-dom";
import { axiosWithAuth } from '../../src/axiosAuth';



function AddRegistrant({ touched, errors, values }) {

    return (
        <Form className="form">
            <h2>New User Registration</h2>
            <div className="form-group">
                <label className="label">Username</label>
                <Field
                    className="input"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={values.username}
                />
                {touched.name && errors.name && <p>{errors.name}</p>}
            </div>

                <div className="form-group">
                    <label className="label">Password</label>
                    <Field
                        className="input"
                        name="password"
                        type="password"
                        autoComplete="off"
                        value={values.password}
                    />
                </div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button className="btn" type="submit">Submit &rarr;</button>
        </Form>
    );
}

export default withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: ""
           
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("A name is required.  Please enter a name."),
        password: Yup.string()
            .min(6, "Your password must be a minimum length of 6.")
            .required("A password is required.  Please enter a password.")

    }),
    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(true)
        const url =
            "http://localhost:5007/api/restricted/data";
        axiosWithAuth()
            .post(url, values)
            .then(response => {
                formikBag.props.history.push("/AfterRegPage");
                formikBag.setSubmitting(false)
                
            })
            .catch(e => {
                console.log(e.response.data);
                formikBag.setSubmitting(false)
            });
    }
})(AddRegistrant);
