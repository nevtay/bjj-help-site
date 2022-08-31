import { useState } from "react"
import { useRouter } from "next/router"
import Button from "../../components/UI/Button"
import List from "../../components/UI/Layout/List"

import data from "../../utils/POSITIONS.json"

const Positions = (props) => {
    const [sorting, setSorting] = useState('asc')
    const router = useRouter()
    const navigateToHomePageHandler = () => router.push("/")
    let positions = props.positions
    const sortPositions = () => {
        if (sorting === 'asc') {
            positions.sort((a, b) => b.name.localeCompare(a.name))
            setSorting('desc')
        } else if (sorting === 'desc') {
            positions.sort((a, b) => a.name.localeCompare(b.name))
            setSorting('asc')
        }
    }
    return (
        <>
            <h1 className='w-4/6 text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-yellow-500'>Positions</h1>
            <Button hoverStyling="hover:bg-orange-400 mb-7" onBack={navigateToHomePageHandler} />
            <br />
            <Button text={`${sorting === 'asc' ? 'Sort Descending ↓' : 'Sort Ascending ↑'}`} hoverStyling={"bg-yellow-600"} onBack={sortPositions} />
            <List data={positions} dataType="positions" hoverStyling="hover:bg-orange-400" />
        </>
    )
}

export default Positions

export async function getStaticProps() {
    return {
        props: {
            positions: data.positions,
        }
    }
}