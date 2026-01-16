interface IUser {
    email: string;
    password: string;
}

export class User {
    private email: string;
    private password: string;

    constructor(user: IUser) {
        this.email = user.email;
        this.password = user.password;
    }
}
