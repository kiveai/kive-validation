import * as yup from 'yup'
import { BIO_MAX_LENGTH, FIRST_NAME_MAX_LENGTH, FIRST_NAME_MIN_LENGTH, LAST_NAME_MAX_LENGTH, LAST_NAME_MIN_LENGTH } from './consts'

export const Constants = {
    FIRST_NAME_MAX_LENGTH,
    FIRST_NAME_MIN_LENGTH,
    LAST_NAME_MAX_LENGTH,
    LAST_NAME_MIN_LENGTH,
    BIO_MAX_LENGTH,
}

export const validateFirstName = (firstName: string): Promise<true> => {
    return yup.string()
        .min(FIRST_NAME_MIN_LENGTH, 'First name must be at least 2 characters long')
        .max(FIRST_NAME_MAX_LENGTH, 'First name must be less than 30 characters long')
        .validate(firstName)
        .then(() => true)
}

export const validateLastName = (lastName: string): Promise<true> => {
    return yup.string()
        .min(LAST_NAME_MIN_LENGTH, 'Last name must be at least 2 characters long')
        .max(LAST_NAME_MAX_LENGTH, 'Last name must be less than 30 characters long')
        .validate(lastName)
        .then(() => true)
}

export const validateEmail = (email: string): Promise<true> => {
    return yup.string()
        .email('Email must be valid')
        .validate(email)
        .then(() => true)
}

export const validateBio = (bio: string): Promise<true> => {
    return yup.string()
        .max(BIO_MAX_LENGTH, 'Bio must be less than 255 characters long')
        .validate(bio)
        .then(() => true)
}

export const validateJobTitle = (jobTitle: string): Promise<true> => {
    return yup.string()
        .oneOf([
            'director',
            'director of photography',
            'cinematographer',
            'dop',
            'dp',
            'd.o.p',
            'colorist',
            'colourist'
        ])
        .validate(jobTitle)
        .then(() => true)
}
