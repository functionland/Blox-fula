import { User, Friend } from "../../spec/interfaces";

interface UserAPI {

    getUser(): Promise<User>

    setUser(u :Partial<User>): Promise<boolean>

    getFriends(): Promise<Friend[]>

}


