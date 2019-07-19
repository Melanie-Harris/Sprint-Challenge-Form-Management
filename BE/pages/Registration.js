import React from "react";
import { withFormik, Form, Field, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Registration({ touched, errors, values }) {
    const token = localStorage.getItem("token");

    if (token) {
        return <Redirect to="/AfterRegPage" />;
    }

    return (
        <Form className="form">
            <div className="form-group">
                <label className="label">Username</label>
                <Field
                    className="input"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={values.username}
                />
                {touched.username && errors.username && <p>{errors.username}</p>}
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
            username: "Melanie",
            password: "password"
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("A username is required.  Please enter a username."),
        password: Yup.string()
            .min(6, "Your password must be a minimum length of 6.")
            .required("A password is required.  Please enter a password.")
    }),
    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(true)
        const url =
            "http://localhost:6000/api/register";
        axios
            .post(url, values)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                formikBag.props.history.push("/AfterRegPage");
                formikBag.setSubmitting(false)
            })
            .catch(e => {
                console.log(e.response.data);
                formikBag.setSubmitting(false)
            });
    }
})(Registration);
