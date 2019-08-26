import User from "./User";

class Exceptions {
    handle(error){
        this.isExpired(error.response.data.error);
    }
    isExpired(error){
        if (error == 'Token is Expired'){
            User.logout();
        }
    }
}

export default Exceptions = new Exceptions();
