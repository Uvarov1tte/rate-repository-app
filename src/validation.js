import * as yup from "yup";

export const signInSchema = yup.object().shape({
    username: yup
        .string()
        .matches(/[a-zA-Z]+\d*/, "Username must contain alphabetical characters and may contain numbers")
        .min(3, "Username must have 3 or more characters.")
        .required("Username is required!"),
    password: yup
        .string()
        .min(8, "Password must have 8 or more characters.")
        .required("Password is required!")
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