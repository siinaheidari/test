"use client"

import {FC, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Spin} from "antd";

const HomePage: FC = () => {

  const [loading, setLoading] = useState(true)

  const router = useRouter()


  useEffect(() => {
    if (loading) {
      setTimeout(()=>{
        setLoading(false)
      },2500)
    } else setTimeout(() => {
      router.push("/login")
    }, 5000)
  }, [loading])


  return (
    <div className='mx-auto center !min-h-screen'>
      {
        loading ?
          <Spin spinning={loading}>

          </Spin>
          : <div>
            <video preload={"auto"} className={"bg-cover object-cover !h-screen !size-full"} autoPlay muted playsInline
                   controls={false}>
              <source src="https://biaupload.com/static/files-2024-06/org-ba07c2005f481.mp4" type="video/mp4"/>
            </video>
          </div>
      }


    </div>
  );
};

export default HomePage;
