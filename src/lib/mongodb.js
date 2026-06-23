import mongoose from 'mongoose';

// Direct Connection String - Bypasses both .env issues and the querySrv DNS bug
//const MONGODB_URI = "mongodb://ivfkrisna_db_user:4ATyrK7dVMuujmyC@ac-wdoxqjh-shard-00-00.3knwey6.mongodb.net:27017,ac-wdoxqjh-shard-00-01.3knwey6.mongodb.net:27017,ac-wdoxqjh-shard-00-02.3knwey6.mongodb.net:27017/krisna_admin?ssl=true&replicaSet=atlas-wdoxqjh-shard-0&authSource=admin&retryWrites=true&w=majority";

const MONGODB_URI = "mongodb://ivfkrisna_db_user:4ATyrK7dVMuujmyC@ac-wdoxqjh-shard-00-00.3knwey6.mongodb.net:27017/krisna_admin?ssl=true&authSource=admin&retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error('Please define the Mongo_url environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;