import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const data = await mongoose.connect("")
    console.log(data)
  } catch (error) {
    throw new error();
  }

  console.log('hey');
};

export { connectDb };
