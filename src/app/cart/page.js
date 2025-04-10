'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function cart(){
  const pathName = usePathname();
  console.log(pathName);
  const searchPharams = useSearchParams();
  console.log(searchPharams.get('search'),searchPharams.get('randomvalue')); //extract query params in client 
  
  return <div>
    <h1>this is our cart component</h1>
  </div>
}