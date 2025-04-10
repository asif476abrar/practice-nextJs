'use client'
import Link from "next/link";
import useSWR from "swr";
//import { useEffect, useState } from "react"

//with loading state
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientDataFetch(){
  //using useEffect hook

  // const [loading, setLoading]= useState(false)
  // const [users, setUsers]= useState([])

  // async function fetchListofUsers(){
  //   try{
  //     setLoading(true)
  //     const apiResponsee = await fetch('https://dummyjson.com/users')
  //     const resulte = await apiResponsee.json()
  //     console.log(resulte?.users);
      
  //     if(resulte?.users){
  //       setUsers(resulte.users)
  //       setLoading(false);
  //     }
  //   }catch(error){
  //     console.log(error);
  //     setUsers([])
  //     setLoading(false)
  //   }
  // }

  // useEffect(()=>{
  //   fetchListofUsers()
  // },[])
  // if(loading)
  //   return <h3 className="text-3xl font-extrabold">Loading users! please wait</h3>


  //using swr,useSwr hook
  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);
  if (error){
    return <div>failed to load</div>
  }

  if(isLoading) {
    return <h3 className="font-bolder text-3xl">Loading users! please wait..</h3>
    }

  return <div>
    <h1>Client side data fatching page</h1>
    <ul>
      {data && data?.users && data?.users.length >0?
      data?.users.map((user)=><li className="mt-5 cursor-pointer">
        <Link  href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
      </li>)
    : null}
    </ul> 
    {/* <ul>
      {users && users.length >0
      ?users.map((user)=><li className="mt-5 cursor-pointer">
        <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
      </li>)
    : null}
    </ul> */}
  </div>
}