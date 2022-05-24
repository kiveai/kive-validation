"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJobTitle = exports.validateBio = exports.validateEmail = exports.validateLastName = exports.validateFirstName = exports.Constants = void 0;
var yup = __importStar(require("yup"));
var consts_1 = require("./consts");
exports.Constants = {
    FIRST_NAME_MAX_LENGTH: consts_1.FIRST_NAME_MAX_LENGTH,
    FIRST_NAME_MIN_LENGTH: consts_1.FIRST_NAME_MIN_LENGTH,
    LAST_NAME_MAX_LENGTH: consts_1.LAST_NAME_MAX_LENGTH,
    LAST_NAME_MIN_LENGTH: consts_1.LAST_NAME_MIN_LENGTH,
    BIO_MAX_LENGTH: consts_1.BIO_MAX_LENGTH,
};
var validateFirstName = function (firstName) {
    return yup.string()
        .min(consts_1.FIRST_NAME_MIN_LENGTH, 'First name must be at least 2 characters long')
        .max(consts_1.FIRST_NAME_MAX_LENGTH, 'First name must be less than 30 characters long')
        .validate(firstName)
        .then(function () { return true; });
};
exports.validateFirstName = validateFirstName;
var validateLastName = function (lastName) {
    return yup.string()
        .min(consts_1.LAST_NAME_MIN_LENGTH, 'Last name must be at least 2 characters long')
        .max(consts_1.LAST_NAME_MAX_LENGTH, 'Last name must be less than 30 characters long')
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
        .max(consts_1.BIO_MAX_LENGTH, 'Bio must be less than 255 characters long')
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
