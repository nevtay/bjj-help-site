import BackButton from "../../components/UI/BackButton"
import List from "../../components/UI/Layout/List"

import data from "../../utils/SUBMISSIONS.json"

const Submissions = () => {
    const submissions = data.submissions
    console.log("subs", submissions)
    return (
        <>
            <h1 className='w-4/6 text-white text-6xl leading-normal mb-5 text-purple-500'>Submissions</h1>
            <BackButton hoverStyling="hover:bg-purple-400" />
            <List data={submissions} />
        </>
    )
}

export default Submissions