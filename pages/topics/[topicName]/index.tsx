import { useRouter } from "next/dist/client/router"

const TopicContents = () => {
    const router = useRouter()
    const { topicName } = router.query
  
    return <p>Topic: {topicName}</p>
  }
  
  export default TopicContents