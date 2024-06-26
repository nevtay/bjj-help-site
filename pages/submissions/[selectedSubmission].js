import Head from "next/head"
import { useRouter } from "next/router"
import submissions from "../../utils/SUBMISSIONS.json"
import Button from "../../components/UI/Button"
import SingleVideo from "../../components/UI/SingleVideo"

const SelectedSubmission = () => {
    const router = useRouter()
    const selectedSubmission = router.query.selectedSubmission || ""
    const selectedSubmissionData = submissions.submissions.find(sub => sub.name.toLowerCase() === selectedSubmission.toLowerCase())

    const navigateToSubmissionsPage = () => router.push('/submissions')

    if (!selectedSubmissionData) {
        return (
            <>
                <Head>
                    <title>Submission not found</title>
                    <meta name="description" content={`Submission data not found!`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-purple-500'>Submission</h1>
                    <Button onBack={navigateToSubmissionsPage} hoverStyling="hover:bg-purple-400 hover:text-black mb-7" />
                    <p className='w-12/12 text-small leading-normal text-purple-300 mb-5 md:w-5/6 '>{`No data found for "${selectedSubmission}"`}</p>
                </div>
            </>
        )
    }

    if (selectedSubmissionData) {
        let images = 
            <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
                {selectedSubmissionData.imagesUrl && selectedSubmissionData.imagesUrl.map(img => {
                    return (
                        <img src={`${img}`} key={img} className="rounded-lg object-fill mb-3 w-12/12 md:w-5/6 lg:w-5/12 lg:mt-0 lg:mr-3 last-of-type:lg:mr-0" />
                    )
                })}
            </span>
        
        let videos = 
            <span className="flex flex-col flex-wrap items-start items-center w-12/12 md:items-start lg:flex-row lg:w-12/12 lg:items-stretch lg:justify-start">
                {selectedSubmissionData.videosUrl && selectedSubmissionData.videosUrl.map(vid => <SingleVideo key={vid} video={vid} />)}
            </span>

        return (
            <>
                <Head>
                    <title>{selectedSubmissionData.name}</title>
                    <meta name="description" content={`Learn about ${selectedSubmissionData.name}`} />
                </Head>
                <div>
                    <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-purple-500'>Submissions</h1>
                    <Button onBack={navigateToSubmissionsPage} hoverStyling="hover:bg-purple-400 hover:text-black mb-7" />
                    <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-purple-300 mb-5'>{selectedSubmissionData.name}</h2>
                    <p className='w-12/12 text-small leading-normal text-purple-300 mb-5 md:w-5/6 '>{selectedSubmissionData.description}</p>
                    {images}
                    <h2 className='w-4/6 text-3xl md:text-4xl leading-normal text-purple-300 mb-6'>Videos</h2>
                    {selectedSubmissionData?.videosUrl.length ? videos : <p className='text-2xl md:text-3xl leading-normal text-purple-200 mb-5'>Coming Soon</p>}
                </div>
            </>
        )
    }
}

export default SelectedSubmission