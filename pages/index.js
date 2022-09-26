import Main from "../app/components/screens/main/Main"
import axios from "axios"
import {API_URL} from "../app/constants"


export default function Home(props) {
  return (
    <Main {...props}/>
  )
}

export const getStaticProps = async () => {
  const links = await axios.get(`${API_URL}/projects`).then(({data}) => data)

  return {
    props: {
      links
    },
    revalidate: 60
  }
}