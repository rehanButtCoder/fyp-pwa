import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Image
        src="/images/profile.png"
        width={111}
        height={111}
        alt="Picture of the author"
      />
      <h1>Hello World</h1>
    </div>
  );
}
