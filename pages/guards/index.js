import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/UI/Button";
import List from "../../components/UI/List";

import data from "../../utils/GUARDS.json";

const Guards = (props) => {
    const [sorting, setSorting] = useState("asc");
    const router = useRouter();
    const navigateToHomePageHandler = () => router.push("/");
    let guards = props.guards;
    const sortGuards = () => {
        if (sorting === "asc") {
            guards.sort((a, b) => b.name.localeCompare(a.name));
            setSorting("desc");
        } else if (sorting === "desc") {
            guards.sort((a, b) => a.name.localeCompare(b.name));
            setSorting("asc");
        }
    };
    return (
        <>
            <Head>
                <title>Guards</title>
                <meta name="description" content={`Guards database`} />
            </Head>
            <div>
                <h1 className="text-5xl md:text-6xl leading-normal mb-5 font-bold tracking-wide text-blue-500">
                    Guards
                </h1>
                <Button
                    hoverStyling="hover:bg-blue-400 mb-7"
                    onBack={navigateToHomePageHandler}
                />
                <br />
                <Button
                    className={"text-xs"}
                    text={`${sorting === "asc" ? "↓ Sort Z-A" : "↑ Sort A-Z"}`}
                    onBack={sortGuards}
                />
                <List
                    data={guards}
                    dataType="guards"
                    hoverStyling="hover:bg-blue-400"
                ></List>
            </div>
        </>
    );
};

export default Guards;

export async function getStaticProps() {
    return {
        props: {
            guards: data.guards.sort((a, b) => a.name.localeCompare(b.name)),
        },
    };
}
