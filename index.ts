import * as yup from 'yup'


export const validateFirstName = (firstName: string): Promise<true> => {
    return yup.string()
        .min(2, 'First name must be at least 2 characters long')
        .max(30, 'First name must be less than 30 characters long')
        .validate(firstName)
        .then(() => true)
}

export const validateLastName = (lastName: string): Promise<true> => {
    return yup.string()
        .min(2, 'Last name must be at least 2 characters long')
        .max(30, 'Last name must be less than 30 characters long')
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
        .max(255, 'Bio must be less than 255 characters long')
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
