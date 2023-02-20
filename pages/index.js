import Main from "../app/components/screens/main/Main"
import axios from "axios"
import {API_URL} from "../app/constants"


export default function Home(props) {
  return (
    <Main {...props}/>
  )
}

export const getStaticProps = async () => {
  try {
    const projects = await axios.get(`${API_URL}/projects`).then(({data}) => data)
  const about = await axios.get(`${API_URL}/about`).then(({data}) => data)
  const skills = await axios.get(`${API_URL}/skills`).then(({data}) => data)
  const certificates = await axios.get(`${API_URL}/certificates`).then(({data}) => data)
  const contacts = await axios.get(`${API_URL}/contacts`).then(({data}) => data)
  const social = await axios.get(`${API_URL}/social`).then(({data}) => data)

  if (!projects || !about || !skills || !certificates || !contacts || !social) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      projects,
      about,
      skills,
      certificates,
      contacts,
      social
    }
  }
  } catch {
    return {
      props: {
        projects: null,
      about: null,
      skills: null,
      certificates: null,
      contacts: null,
      social: null
      }
    }
  } 
  
  

  
}