import { Inter } from "next/font/google";
import { ExampleComponent } from "@/components/example";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ExampleComponent />
    </main>
  );
}
