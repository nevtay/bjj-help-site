import { useRouter } from "next/router"

const SelectedSubmission = () => {
    const router = useRouter()
    const selectedSubmission = router.query.selectedSubmission || ""

    return (
        <div className='text-white'>{selectedSubmission}</div>
    )
}

export default SelectedSubmission