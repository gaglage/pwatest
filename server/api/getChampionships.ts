import { connectToDatabase } from "../utils/mongodb";

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  console.log("🚀 ~ file: getChampionships.ts:5 ~ defineEventHandler ~ db:", db)
  const championsipsCollection = db.collection("championships");
  console.log("🚀 ~ file: getChampionships.ts:6 ~ defineEventHandler ~ championsipsCollection:", championsipsCollection)

  try {
    const championsips = await championsipsCollection.find({}).toArray();
    return {
      success: true,
      data: championsips,
    };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
});
