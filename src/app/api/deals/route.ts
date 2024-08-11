import { db } from "@/server/db";

export const GET = async () => {
  const deals = await db.query.deals.findMany();

  return new Response(JSON.stringify(deals), {
    status: 200,
  });
};
