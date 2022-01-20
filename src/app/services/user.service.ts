import { User } from "../models/User.model";
import { Subject } from 'rxjs-compat';

export class UserService{

    private users : User | any = [
        {
            firstName : 'Ny Hasina' , 
            lastName : 'Finaritra',
            email : 'nyhasina.finaritra@gmail.com',
            drinkPreference : 'Coffee' , 
            hobbies : ['Games']
        }
    ] ;
    userSubject = new Subject<User[]>() ;
    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user:User){
        this.users.push(user);
        this.emitUsers()
    }

}