export default class UsersDataDTO {    
    constructor(user) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.age = user.age;
        this.email = user.email;
        this.cart = user.cart;
        this.role = user.role;
        this.last_connection = user.last_connection;
    }
}