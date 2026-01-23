import Image from "next/image";

export default function Home() {
  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to space</h1>
      <Image
        src="/images/sample.jpg"
        alt="Sample Image"
        width={600}
        height={400}
      />
    </main>
  );
}
