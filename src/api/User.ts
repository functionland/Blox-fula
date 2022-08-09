import { User, Friend } from "../../spec/DTOs";
import * as Mock from "../mock"

interface UserAPI {

    getUser(): Promise<User>

    setUser(u :Partial<User>): Promise<boolean>

    getFriends(): Promise<Friend[]>

}

export const createUserAPI = (): UserAPI => {
    return {
        getUser: (): Promise<User> => Mock.mockPromise(Mock.user) ,
        setUser: (_: Partial<User>): Promise<boolean> => Mock.mockPromise(true),
        getFriends: (): Promise<Friend[]> => Mock.mockPromise(Mock.friends)
    }
}


