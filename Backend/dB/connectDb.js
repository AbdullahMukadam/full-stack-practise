import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const data = await mongoose.connect(
      "mongodb+srv://abdullahmukadam21:zachmukaa@backendpractise.ouc5tlh.mongodb.net/"
    );
    console.log(data)
  } catch (error) {
    throw new error();
  }

  console.log('hey');
};

export { connectDb };
