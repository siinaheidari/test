"use client"

import {FC, useEffect} from "react";
import {useRouter} from "next/navigation";

const HomePage: FC = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/login")
        }, 5000)
    }, [])

    return (
        <div className='mx-auto center  !min-h-screen'>

            <div>
                <video className={"bg-cover object-cover !h-screen !size-full"} autoPlay muted playsInline loop controls={false} preload="none">
                    <source src="/assets/videos/introBull.mp4" type="video/mp4"/>
                </video>
            </div>

        </div>
    );
};

export default HomePage;
