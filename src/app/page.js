'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter() //recommended
  console.log(router);
  function handleNavigate(){
    router.push('product')
  }
  function handleNavigateAccount(){
    router.push('account')
  }
  return (
    <div className="flex items-center flex-col min-h-screen p-24 ">
      <h1>welcome to Next js proggrame 2025</h1>
      <Link href={'/product'}>navigate to the product page</Link>
      <Link href={'/account'}>navigate to account page</Link>
      <h2 className="font-bold mt-3 text-lg">Alternative way to navigating a page</h2>
      <button onClick={handleNavigate}>Navigate to product page using use router</button>
      <button onClick={handleNavigateAccount}>Navigate to account page using use router</button>
    </div>
  );
}
