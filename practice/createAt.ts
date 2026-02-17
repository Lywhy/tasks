interface IUserService {
    users: number,
    getUserInDatabase(): number
}

@CreateAt
class UserService implements IUserService {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}

type CreateAt = {
    createdAt: Date
}

function CreateAt<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt: Date = new Date()
    } 
}

console.log((new UserService() as IUserService & CreateAt).createdAt)