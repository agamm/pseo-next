import { getIP } from "@/serverless/example";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const myIP = await getIP();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello {myIP} !</h1>
      <p>
        Check:{" "}
        <Link href="/variant/modifier-1" className="underline">
          This Programmatic Route
        </Link>
      </p>
    </main>
  );
}
