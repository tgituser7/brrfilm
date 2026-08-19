import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

const DB_NAME = "bolo_radhe_radhe";
const COLLECTION = "counters";
const COUNTER_ID = "visitors";
const COOKIE_NAME = "brr_visited";

async function getCounters() {
  const client = await getMongoClient();
  return client.db(DB_NAME).collection<{ _id: string; count: number }>(COLLECTION);
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const alreadyVisited = cookieHeader
    .split(";")
    .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

  const counters = await getCounters();

  let count: number;
  if (alreadyVisited) {
    const doc = await counters.findOne({ _id: COUNTER_ID });
    count = doc?.count ?? 0;
  } else {
    const result = await counters.findOneAndUpdate(
      { _id: COUNTER_ID },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );
    count = result?.count ?? 1;
  }

  const response = NextResponse.json({ count });

  if (!alreadyVisited) {
    response.cookies.set(COOKIE_NAME, "1", {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}
