import * as yup from 'yup'

type ValidationType = boolean | Error

export const validateFirstName = (firstName: string): Promise<ValidationType> => {
    return yup.string()
    .min(2, 'First name must be at least 2 characters long')
    .max(30, 'First name must be less than 30 characters long')
    .validate(firstName)
        .then(() => true)
}

export const validateLastName = (lastName: string): Promise<ValidationType> => {
    return yup.string()
    .min(2, 'Last name must be at least 2 characters long')
    .max(30, 'Last name must be less than 30 characters long')
    .validate(lastName)
        .then(() => true)
}

export const validateEmail = (email: string): Promise<ValidationType> => {
    return yup.string()
    .email('Email must be valid')
    .validate(email)
        .then(() => true)
}

export const validateBio = (bio: string): Promise<ValidationType> => {
    return yup.string()
    .max(255, 'Bio must be less than 255 characters long')
    .validate(bio)
        .then(() => true)
}
