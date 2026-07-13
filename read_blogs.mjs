import mongoose from 'mongoose';
import { Blog } from './src/models/Data.js';

const MONGODB_URI = "mongodb://ivfkrisna_db_user:4ATyrK7dVMuujmyC@ac-wdoxqjh-shard-00-00.3knwey6.mongodb.net:27017/krisna_admin?ssl=true&authSource=admin&retryWrites=true&w=majority";

async function main() {
    try {
        await mongoose.connect(MONGODB_URI);
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        console.log(JSON.stringify(blogs, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        mongoose.disconnect();
    }
}

main();
