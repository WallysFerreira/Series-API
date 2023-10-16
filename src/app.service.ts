import { Injectable } from '@nestjs/common';
import { Serie } from './Models/serie.model';
import 'dotenv/config';
import { Collection } from 'mongodb';

const { MongoClient } = require('mongodb');
const dbName = "series";
const client = new MongoClient(process.env.MONGO_URI);

async function connect(): Promise<Collection> {
  await client.connect();
  const collection = client.db(dbName).collection(dbName);

  return collection;
}

@Injectable()
export class AppService {
  async create(serie: Serie): Promise<string> {
    try {
      const collection = await connect();

      const result = await collection.insertMany([serie]);

      return `Inserted document with id ${result.insertedIds['0']}`;
    } catch (err) {
      return err;
    } finally {
      await client.close();
    }
  }
  
  async getAll(): Promise<any> {
    try {
      const collection = await connect();

      const result = await collection.find({}).toArray();

      return result;
    } catch (err) {
      return err;
    } finally {
      client.close();
    }
  }

  delete(): string {
    return 'WIP';
  }

  update(): string {
    return 'WIP';
  }
}
