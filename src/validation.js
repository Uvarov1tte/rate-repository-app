import * as yup from "yup";

export const signInSchema = yup.object().shape({
    username: yup
        .string()
        .matches(/[a-zA-Z]+\d*/, "Username must contain alphabetical characters and may contain numbers")
        .min(5, "Username must have 5 or more characters.")
        .max(30, "Username must have 30 or less characters.")
        .required("Username is required!"),
    password: yup
        .string()
        .min(5, "Password must have 8 or more characters.")
        .max(50, "Password must have 50 or less characters.")
        .required("Password is required!")
});

export const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .matches(/[a-zA-Z]+\d*/, "Username must contain alphabetical characters and may contain numbers")
        .min(5, "Username must have 5 or more characters.")
        .max(30, "Username must have 30 or less characters.")
        .required("Username is required!"),
    password: yup
        .string()
        .min(5, "Password must have 8 or more characters.")
        .max(50, "Password must have 50 or less characters.")
        .required("Password is required!"),
    passwordConfirm: yup.string()
        .oneOf([yup.ref("password"), null], "Password must match.")
        .required("Password confirmmation is required.")
});

export const reviewSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Repository owner name is required!"),
    repositoryName: yup
        .string()
        .required("Repository name is required!"),
    rating: yup
        .number()
        .required("Rating is required!"),
    text: yup
        .string()

});