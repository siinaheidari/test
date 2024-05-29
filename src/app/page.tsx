"use client"

import {FC, useEffect} from "react";
import {useRouter} from "next/navigation";

const HomePage: FC = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/login")
        }, 5300)
    }, [])


    return (
        <div className='mx-auto center  !min-h-screen'>
            {/*      <div className={"text-center space-y-4"}>
                <Image alt={'bulldog Music'} layout={''} src={landing} width={350}
                       height={350} className='max-w-full'/>
                <div className={"text-[40px] font-bold text-[#A6031A]"}>
                    bulldogify
                </div>
            </div>*/}
            <div>
                <video className={"bg-cover object-cover !h-screen !size-full"}  autoPlay muted playsInline loop
                       controls={false} preload="none">
                    <source src="https://github.com/siinaheidari/test/raw/main/public/assets/videos/introBull.mp4" type="video/mp4"/>
                </video>
            </div>

        </div>
    );
};

export default HomePage;
