import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const COUNT_FILE = path.join(DATA_DIR, "visitor-count.json");
const COOKIE_NAME = "brr_visited";

async function readCount(): Promise<number> {
  try {
    const raw = await fs.readFile(COUNT_FILE, "utf-8");
    return JSON.parse(raw).count ?? 0;
  } catch {
    return 0;
  }
}

async function writeCount(count: number) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(COUNT_FILE, JSON.stringify({ count }));
}

// Serializes all read-modify-write access to the counter through one chained
// promise so concurrent requests can't race and lose an increment.
let queue: Promise<number> = readCount();

function incrementCount(): Promise<number> {
  queue = queue.then(async (current) => {
    const next = current + 1;
    await writeCount(next);
    return next;
  });
  return queue;
}

export async function GET(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const alreadyVisited = cookieHeader
    .split(";")
    .some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));

  const count = alreadyVisited ? await queue : await incrementCount();

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
