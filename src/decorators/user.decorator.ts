import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data, req) => {
  //will print test from bottom example
  console.log(data);
  return req.user;
});

/*
Use Later like this
@Get()
async findOne(@User('test') user: UserEntity) {
  console.log(user);
}
*/
