import { useRouter } from "next/router"
import BackButton from "../../components/UI/BackButton"

const SelectedSubmission = () => {
    const router = useRouter()
    const selectedSubmission = router.query.selectedSubmission || ""
    const navigateToSubmissionsPage = () => router.push('/submissions')
    return (
        <div>
            <h1 className='w-4/6 text-6xl leading-normal mb-1 text-purple-500'>Submissions</h1>
            <h2 className='w-4/6 text-4xl leading-normal text-purple-300 mb-5'>{selectedSubmission}</h2>
            <BackButton onBack={navigateToSubmissionsPage} hoverStyling="hover:bg-purple-400" />
        </div>
    )
}

export default SelectedSubmission