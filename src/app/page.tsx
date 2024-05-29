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
                    <source src="https://gemootest.s3.us-east-2.amazonaws.com/s/res/654388055862730752/34e66225990ae4b172975f65269d7527.mp4?response-content-disposition=attachment%3B%20filename%3DintroBull.mp4&response-expires=Wed%2C%2029%20May%202024%2010%3A37%3A00%20GMT&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARLZICB6QQHKRCV7K%2F20240529%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240529T103200Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=c64595ad296febe61f589f163f1dc9671201a221b710cd15b91184ac6b64ed03" type="video/mp4"/>
                </video>
            </div>

        </div>
    );
};

export default HomePage;
