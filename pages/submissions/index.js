import Head from "next/head"
import { useState } from "react"
import { useRouter } from "next/router"
import Button from "../../components/UI/Button"
import List from "../../components/UI/List"

import data from "../../utils/SUBMISSIONS.json"

const Submissions = (props) => {
    const [sorting, setSorting] = useState('asc')
    const router = useRouter()
    const navigateToHomePageHandler = () => router.push("/")
    let submissions = props.submissions
    const sortSubmissions = () => {
        if (sorting === 'asc') {
            submissions.sort((a, b) => b.name.localeCompare(a.name))
            setSorting('desc')
        } else if (sorting === 'desc') {
            submissions.sort((a, b) => a.name.localeCompare(b.name))
            setSorting('asc')
        }
    }
    return (
        <>
            <Head>
                <title>Submissions</title>
                <meta name="description" content={`Submission database`} />
            </Head>
            <div className="h-screen">
                <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-purple-500'>Submissions</h1>
                <Button hoverStyling="hover:bg-purple-400 mb-7" onBack={navigateToHomePageHandler} />
                <br />
                <Button text={`${sorting === 'asc' ? '↓ Sort Descending' : '↑ Sort Ascending'}`} onBack={sortSubmissions} />
                <List data={submissions} dataType="submissions" hoverStyling="hover:bg-purple-400" />
            </div>
        </>
    )
}

export default Submissions

export async function getStaticProps() {
    return {
        props: {
            submissions: data.submissions.sort((a, b) => a.name.localeCompare(b.name))
        }
    }
}