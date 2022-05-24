export declare const Constants: {
    FIRST_NAME_MAX_LENGTH: number;
    FIRST_NAME_MIN_LENGTH: number;
    LAST_NAME_MAX_LENGTH: number;
    LAST_NAME_MIN_LENGTH: number;
    BIO_MAX_LENGTH: number;
};
export declare const validateFirstName: (firstName: string) => Promise<true>;
export declare const validateLastName: (lastName: string) => Promise<true>;
export declare const validateEmail: (email: string) => Promise<true>;
export declare const validateBio: (bio: string) => Promise<true>;
export declare const validateJobTitle: (jobTitle: string) => Promise<true>;
