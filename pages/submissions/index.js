import { useRouter } from "next/router"
import BackButton from "../../components/UI/BackButton"
import List from "../../components/UI/Layout/List"

import data from "../../utils/SUBMISSIONS.json"

const Submissions = (props) => {
    const router = useRouter()
    const submissions = props.submissions
    const navigateToHomePageHandler = () => router.push("/")
    return (
        <>
            <h1 className='w-4/6 text-6xl leading-normal mb-3 text-purple-500'>Submissions</h1>
            <BackButton hoverStyling="hover:bg-purple-400" onBack={navigateToHomePageHandler} />
            <List data={submissions} dataType="submissions" hoverStyling="hover:bg-purple-400" />
        </>
    )
}

export default Submissions

export async function getStaticProps() {
    return {
        props: {
            submissions: data.submissions
        }
    }
}