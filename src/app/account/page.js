import { redirect } from "next/navigation";

export default function Accounts(){
const userProfileInfo = null;
if(userProfileInfo == null) redirect('product?search=product1') //redirect('cart?search=product1&randomvalue=abcde')

  return <div>
    <h1>this is account page</h1>
  </div>
}