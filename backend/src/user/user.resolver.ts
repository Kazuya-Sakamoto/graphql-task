import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/createUser.input';
import { User } from '@prisma/client';
import { User as UserModel } from './models/user.model';
import { GetUserArgs } from './dto/getUser.args';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => UserModel, { nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.userService.getUser(getUserArgs.email);
  }
}
