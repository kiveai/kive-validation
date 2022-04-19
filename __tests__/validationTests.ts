import * as Validator from '../index'
test('Should be able to pass firstName validation', () => {
    Validator.validateFirstName('Martin')
    .then((res) => expect(res).toBeTruthy())
})

test('Should be able to fail firstName validation', () => {
    Validator.validateFirstName('a')
    .catch((error) => expect(error.message).toBe('First name must be at least 2 characters long'))
})

test('Should be able to pass lastName validation', () => {
    Validator.validateLastName('Lorem')
    .then((res) => expect(res).toBeTruthy())
})

test('Should be able to fail lastName validation', () => {
    Validator.validateLastName('Lorem')
    .catch((error) => expect(error.message).toBe('First name must be at least 2 characters long'))
})

test('Should be able to pass email validation', () => {
    Validator.validateEmail('martin@kive.ai')
    .then((res) => expect(res).toBeTruthy())
})

test('Should be able to fail email validation', () => {
    Validator.validateEmail('hehe@k')
    .catch((error) => expect(error.message).toBe('Email must be valid'))
})

test('Should be able to pas bio validation', () => {
    Validator.validateBio('Jag heter Martin')
    .then((res) => expect(res).toBeTruthy())
})

test('Should be able to fail bio validation', () => {
    Validator.validateBio('')
    .catch((error) => expect(error.message).toBe('Email must be valid'))
})
