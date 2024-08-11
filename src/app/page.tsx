import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect("/auth/login");
  }

  return <main>Dashboard</main>;
}
