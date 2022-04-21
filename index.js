"use strict";
exports.__esModule = true;
exports.validateJobTitle = exports.validateBio = exports.validateEmail = exports.validateLastName = exports.validateFirstName = void 0;
var yup = require("yup");
var validateFirstName = function (firstName) {
    return yup.string()
        .min(2, 'First name must be at least 2 characters long')
        .max(30, 'First name must be less than 30 characters long')
        .validate(firstName)
        .then(function () { return true; });
};
exports.validateFirstName = validateFirstName;
var validateLastName = function (lastName) {
    return yup.string()
        .min(2, 'Last name must be at least 2 characters long')
        .max(30, 'Last name must be less than 30 characters long')
        .validate(lastName)
        .then(function () { return true; });
};
exports.validateLastName = validateLastName;
var validateEmail = function (email) {
    return yup.string()
        .email('Email must be valid')
        .validate(email)
        .then(function () { return true; });
};
exports.validateEmail = validateEmail;
var validateBio = function (bio) {
    return yup.string()
        .max(255, 'Bio must be less than 255 characters long')
        .validate(bio)
        .then(function () { return true; });
};
exports.validateBio = validateBio;
var validateJobTitle = function (jobTitle) {
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
        .then(function () { return true; });
};
exports.validateJobTitle = validateJobTitle;
