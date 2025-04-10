 async function fetchUserDetails(currentUserId) {
  try{
    const appiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`) 
    const resulta = await appiResponse.json()
    return resulta;
  }catch(e){
    throw new Error(e)
  }
}

export default async function UserDetails({params}){
  console.log(params); // {details: 'id'}
  const UserDetails = await fetchUserDetails(params.details) 
  
  
  return <div>
    <h1>this is user deatils page</h1>
    <p>{UserDetails?.firstName} {UserDetails?.lastName}</p>
    <p>{UserDetails?.age}</p>
    <p>{UserDetails?.email}</p>
    <p>{UserDetails?.phone}</p>
  </div>
}