import Link from "next/link";

export default function Home() {
  return (
   <Link className="bg-gray-700 rounded-lg p-8 flex justify-center text-white" href={"/products"}>products</Link>
  );
}
