"use client"

import {FC, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Spin} from "antd";

const HomePage: FC = () => {

  const [loading, setLoading] = useState(true)
  const router = useRouter()


 /* useEffect(() => {
    setTimeout(()=>{
      router.push("/login")
    },5500)
  }, []);
*/

  return (
    <div className='mx-auto center !min-h-screen'>
        <Spin spinning={loading}>
          <video
            onEnded={() => {
              router.push("/login")
            }}
            onCanPlayThrough={() => {
              setLoading(false)
            }}
            preload={"auto"} className={"bg-cover object-cover !h-screen !size-full"} autoPlay muted playsInline
            controls={false}>
            <source src="https://biaupload.com/static/files-2024-06/org-8f4432da12231.mp4" type="video/mp4"/>
          </video>
        </Spin>

    </div>
  );
};

export default HomePage;
