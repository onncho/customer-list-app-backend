import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  },
);

// const hash = (pass, c) => {
//   console.log('Replace this with Auth Library');
//   //https://www.npmjs.com/package/bcryptjs
// };

// the plugin passport-local-mongoose does the hash and salting by himself
// UserSchema.pre('save', async next => {
//   if (this.isModified('password')) {
//     try {
//       this.password = await this.hash(this.password, 10);
//     } catch (error) {
//       next(error);
//     }
//   }
// });

UserSchema.plugin(passportLocalMongoose);
