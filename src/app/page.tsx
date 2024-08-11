import { getServerAuthSession } from "@/server/auth";
import { SignInButton, SignOutButton } from "./auth-buttons";

export default async function HomePage() {
  const thing = await getServerAuthSession();

  return (
    <main>
      Home
      {thing ? <p>Hello {thing.user.name}</p> : <p>No user</p>}
      {thing ? <SignOutButton /> : <SignInButton />}
    </main>
  );
}
