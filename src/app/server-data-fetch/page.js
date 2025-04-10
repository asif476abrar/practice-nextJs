import Link from "next/link";

async function fetchListOfUsers() {
  try{
    const apiResponse =await fetch('https://dummyjson.com/users') 
    const result =await apiResponse.json()
    return result.users
  }catch(error){
    throw new Error(error)
  }
}

export default async function ServerDataFatch(){

const UserList = await fetchListOfUsers();
  return <div className="p-10">
    <h1>surver side data fatching page : User list page</h1>
    <ul>
      {UserList && UserList.length >0
      ?UserList.map((user)=><li className="mt-5 cursor-pointer">
        <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
      </li>)
    : null}
    </ul>
  </div>
}
//server side data fatching is recommended always