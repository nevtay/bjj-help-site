import { useRouter } from "next/router"

const SelectedPosition = () => {
    const router = useRouter()
    const selectedPosition = router.query.selectedPosition || ""

    return (
        <div className="text-white">{selectedPosition}</div>
    )
}

export default SelectedPosition