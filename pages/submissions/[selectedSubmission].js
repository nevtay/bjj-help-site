import { useRouter } from "next/router"
import submissions from "../../utils/SUBMISSIONS.json"
import BackButton from "../../components/UI/BackButton"

const SelectedSubmission = () => {
    const router = useRouter()
    const selectedSubmission = router.query.selectedSubmission || ""
    const selectedSubmissionData = submissions.submissions.find(sub => sub.name.toLowerCase() === selectedSubmission.toLowerCase())

    const navigateToSubmissionsPage = () => router.push('/submissions')

    if (selectedSubmissionData) {
        let images = <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
            {selectedSubmissionData.imagesUrl && selectedSubmissionData.imagesUrl.map(img => {
                return (
                    <img src={`${img}`} key={img} className="rounded-lg object-fill mb-3 w-12/12 md:w-5/6 lg:w-5/12 lg:mt-0 lg:mr-3 last-of-type:lg:mr-0" />
                )
            })}
        </span>

        return (
            <div>
                <h1 className='w-4/6 text-6xl leading-normal mb-1 text-purple-500'>Submissions</h1>
                <BackButton onBack={navigateToSubmissionsPage} hoverStyling="hover:bg-purple-400 hover:text-black mb-5" />
                <h2 className='w-4/6 text-4xl leading-normal text-purple-300 mb-5'>{selectedSubmissionData.name}</h2>
                <p className='w-12/12 text-small leading-normal text-purple-300 mb-5 md:w-5/6 '>{selectedSubmissionData.description}</p>
                {images}
            </div>
        )
    }
}

export default SelectedSubmission