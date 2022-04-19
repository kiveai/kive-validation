import * as yup from 'yup'

export const validateFirstName = (firstName: string): Promise<boolean> => {
    const schema = yup.string()
    schema.min(2, 'First name must be at least 2 characters long')
    schema.max(30, 'First name must be less than 30 characters long')
    return schema.isValid(firstName)
}

export const validateLastName = (lastName: string): Promise<boolean> => {
    const schema = yup.string()
    schema.min(2, 'Last name must be at least 2 characters long')
    schema.max(30, 'Last name must be less than 30 characters long')
    return schema.isValid(lastName)
}

export const validateEmail = (email: string): Promise<boolean> => {
    const schema = yup.string()
    schema.email('Email must be valid')
    return schema.isValid(email)
}

export const validateBio = (bio: string): Promise<boolean> => {
    const schema = yup.string()
    schema.max(255, 'Bio must be less than 255 characters long')
    return schema.isValid(bio)
}