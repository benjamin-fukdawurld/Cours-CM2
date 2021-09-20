import mongoose, { Mongoose } from 'mongoose';

export async function connectDatabase(): Promise<Mongoose> {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@enseignements.mw6td.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  );
}
