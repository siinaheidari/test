"use client"

import {FC, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Spin} from "antd";

const HomePage: FC = () => {

  const [loading, setLoading] = useState(true)
  const router = useRouter()


  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        router.push("/login")
      }, 0)
      // setLoading(true)
    }
  }, [loading])


  console.log(loading)

  return (
    <div className='mx-auto center !min-h-screen'>

      <Spin spinning={!loading}>
        {/*    <ReactPlayer url='https://biaupload.com/static/files-2024-06/org-ba07c2005f481.mp4'
                     className={"bg-cover object-cover !h-screen !size-full"}

                     controls={true}
                     playsinline={true}
                     autoPlay={true}

                     onReady={() => {
                       setLoading(false)
                     }}

        />*/}
        <video

        /*  onLoad={() => {
            setLoading(false)
          }}

          onPlay={() => {
            setLoading(false)
          }}

          onLoadedMetadata={() => {
            setLoading(false)
          }}

          onLoadedData={() => {
            setLoading(false)
          }}*/

          onEnded={() => {
            setLoading(false)

          }} className={"bg-cover object-cover !h-screen !size-full"} autoPlay muted playsInline
          controls={false}>
          <source src="https://biaupload.com/static/files-2024-06/org-ba07c2005f481.mp4" type="video/mp4"/>
        </video>

      </Spin>

    </div>
  );
};

export default HomePage;
