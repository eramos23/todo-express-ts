import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository){

    }

    async registerUser({name, email, description}: {name: string, email:string, description: string}) {
        const userValue = new UserValue({name, email, description})
        const userCreated = await this.userRepository.registerUser(userValue)
        return userCreated;
    }
    registerUserAndNotify() {

    }
}