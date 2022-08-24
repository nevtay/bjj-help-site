import { useRouter } from "next/router"

const SelectedSubmission = () => {
    const router = useRouter()
    const selectedSubmission = router.query.selectedSubmission || ""

    return (
        <div>
            <h1 className='w-4/6 text-6xl leading-normal mb-1 text-purple-500'>Submissions</h1>
            <h2 className='w-4/6 text-4xl leading-normal text-purple-300'>{selectedSubmission}</h2>
        </div>
    )
}

export default SelectedSubmission