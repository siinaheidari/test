"use client"

import {FC, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const HomePage: FC = () => {

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/login")
        }, 5300)
    }, [])




    return (
        <div className='mx-auto center  !min-h-screen'>


            <div>
                <video preload={"auto"} className={"bg-cover object-cover !h-screen !size-full"}  autoPlay muted playsInline loop
                       controls={false}>
                    <source src="https://biaupload.com/static/files-2024-05/org-409c051ff8533.mp4" type="video/mp4"/>
                </video>
            </div>

        </div>
    );
};

export default HomePage;
