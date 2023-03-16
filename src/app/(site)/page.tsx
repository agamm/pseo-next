import { Inter } from "next/font/google";
import { ExampleComponent } from "@/components/example";
import { getIP } from "@/serverless/example";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const myIP = await getIP();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello {myIP} !</h1>
      <ExampleComponent />
    </main>
  );
}
