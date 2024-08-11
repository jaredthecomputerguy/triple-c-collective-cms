import { getServerAuthSession } from "@/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main>Dashboard - {session ? session.user.email : "Not logged in"}</main>
  );
}
