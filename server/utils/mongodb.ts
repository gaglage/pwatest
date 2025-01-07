import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // Asegúrate de configurar tu URI en el archivo .env
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Por favor, define la variable MONGODB_URI en el archivo .env");
}

declare global {
  // Para mantener una única instancia en desarrollo
  var _mongoClientPromise: Promise<MongoClient>;
}


if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const connectToDatabase = async () => {
  const dbClient = await clientPromise;
  console.log("🚀 ~ file: mongodb.ts:32 ~ connectToDatabase ~ dbClient:", dbClient)
  return dbClient.db("motor"); // Cambia "myDatabase" por el nombre de tu base de datos
};
