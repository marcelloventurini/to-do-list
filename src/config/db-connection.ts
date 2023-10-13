import mongoose from "mongoose"

async function dbConnect(uri: string): Promise<void> {
  try {
    await mongoose.connect(uri)
    console.log('Connected to DB.')
  } catch (error) {
    console.log('Failed to connect to DB.', error)
    process.exit(1)
  }
}

export default dbConnect
