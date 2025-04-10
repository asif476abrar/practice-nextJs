import Link from "next/link";



export default function NotFound(){
  return <div>
    <h1>this page does not exist</h1>
    <Link href={"/"}>go back home</Link>
  </div>
}