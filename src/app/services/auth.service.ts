export class AuthService{
    isAuth = false;

    signIn(){
        return new Promise(
            (resolve , reject) => {
                setTimeout(
                    () => {
                        resolve(true);
                        this.isAuth = true;
                    } , 2000
                );
            }
        );
    }

    singOut(){
        this.isAuth = false;
    }

}