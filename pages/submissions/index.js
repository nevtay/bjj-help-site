import { useRouter } from "next/router"
import Button from "../../components/UI/Button"
import List from "../../components/UI/Layout/List"

import data from "../../utils/SUBMISSIONS.json"

const Submissions = (props) => {
    const router = useRouter()
    const submissions = props.submissions
    const navigateToHomePageHandler = () => router.push("/")
    return (
        <>
            <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-purple-500'>Submissions</h1>
            <Button hoverStyling="hover:bg-purple-400 mb-7" onBack={navigateToHomePageHandler} />
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