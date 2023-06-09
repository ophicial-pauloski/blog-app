import { Strategy } from 'passport-jwt';
import { UserService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: {
        userId: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
