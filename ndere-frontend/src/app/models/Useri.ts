export interface IUseri {
    id: string;
    name: string;
    surname: string;
    streetName: string;
    zipCode: string;
    city: string;
    role: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    name?: string;
    username?: string;
}