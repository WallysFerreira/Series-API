import { Injectable } from '@nestjs/common';
import { Serie } from './Models/serie.model';
import 'dotenv/config';

const { MongoClient } = require('mongodb');
const dbName = "series";
const client = new MongoClient(process.env.MONGO_URI);

@Injectable()
export class AppService {
  async create(serie: Serie): Promise<string> {
    try {
      await client.connect();
      const collection = client.db(dbName).collection(dbName);

      const result = await collection.insertMany([serie]);

      return `Inserted document with id ${result.insertedIds['0']}`;
    } catch (err) {
      return err;
    } finally {
      await client.close();
    }
  }
  
  getAll(): string {
    return 'WIP';
  }

  delete(): string {
    return 'WIP';
  }

  update(): string {
    return 'WIP';
  }
}
