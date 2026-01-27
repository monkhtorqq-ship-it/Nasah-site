import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold" >Welcome to space</h1>
      <Image
        src="/../public/1315743.jpg"
        alt="Space Image"
        width={600}
        height={400}
      />
    </main>
  );
}
