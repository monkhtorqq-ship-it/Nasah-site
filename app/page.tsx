  import Image from "next/image";
  import Header from "./components/Header";
  import Hero from "./components/Hero";

  export default function Home() {
    return (
      <main className = "flex min-h-screen flex-col items-center justify-between p-24">

        <Header />

        <Hero />

        {/* <Image
          src="/../public/1315743.jpg"
          alt="Space Image"
          width={600}
          height={400}
        /> */}
      </main>
    );
  }
