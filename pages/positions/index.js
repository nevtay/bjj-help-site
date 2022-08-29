import { useRouter } from "next/router"
import BackButton from "../../components/UI/BackButton"
import List from "../../components/UI/Layout/List"

import data from "../../utils/POSITIONS.json"

const Positions = (props) => {
    const router = useRouter()
    const navigateToHomePageHandler = () => router.push("/")
    const positions = props.positions
    return (
        <>
            <h1 className='w-4/6 text-6xl leading-normal mb-3 font-bold tracking-wide text-yellow-500'>Positions</h1>
            <BackButton hoverStyling="hover:bg-orange-400" onBack={navigateToHomePageHandler} />
            <List data={positions} dataType="positions" hoverStyling="hover:bg-orange-400" />
        </>
    )
}

export default Positions

export async function getStaticProps() {
    return {
        props: {
            positions: data.positions
        }
    }
}