import { useEffect } from "react"
import useAccountData from "../store/authStore"
import NavBar from "../components/NavBar/NavBar"

const Home = () => {
  const {data , getAccountData} = useAccountData()
  useEffect(()=>{
    getAccountData()
  },[getAccountData])
  return (
    <>
      <NavBar/>
    </>
  )
}

export default Home