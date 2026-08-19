import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

const DB_NAME = "bolo_radhe_radhe";
const COLLECTION = "interested_users";

const MOBILE_REGEX = /^(\+91[-\s]?)?[6-9]\d{9}$/;

export async function POST(request: Request) {
  let body: { name?: unknown; mobile?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const mobile = typeof body.mobile === "string" ? body.mobile.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!MOBILE_REGEX.test(mobile)) {
    return NextResponse.json({ error: "invalid_mobile" }, { status: 400 });
  }

  const client = await getMongoClient();
  await client
    .db(DB_NAME)
    .collection(COLLECTION)
    .insertOne({ name, mobile, createdAt: new Date() });

  return NextResponse.json({ ok: true });
}
