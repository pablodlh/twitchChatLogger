import { MongoClient, Collection, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_CONN_STRING || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "twitch-database";
const collections: { [key: string]: Collection } = {};

async function createMongoConnection() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    addCollections(db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const addCollections = (db: Db) => {
  collections.mensajes = db.collection(
    process.env.MENSAJES_COLLECTION_NAME || "mensajes"
  );
};

export default createMongoConnection;
export { collections };