import  mongoose from 'mongoose';
import { config } from '../config/Constants';

export class MongoConnection {
    public async connect(): Promise<void> {
        try{
            await mongoose.connect(config.MONGO_CONNECTION);
            console.error('Database connected');
        }catch(error){
            console.error(error.message);
            console.log('erro');
            process.exit(1);
        }
    }
}