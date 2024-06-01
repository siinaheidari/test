"use client"

import {FC, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Spin} from "antd";
import ReactPlayer from "react-player";

const HomePage: FC = () => {

  const [loading, setLoading] = useState(true)
  const router = useRouter()


  return (
    <div className='mx-auto center !min-h-screen'>

      <Spin spinning={loading}>
        <div>
          <ReactPlayer url='https://biaupload.com/static/files-2024-06/org-ba07c2005f481.mp4'
                       className={" !bg-cover !object-cover !h-screen !size-full overflow-hidden !bg-black"}
                       playing={true}
                       controls={false}
                       playsinline={true}
                       autoPlay={true}
                       muted
                       onReady={() => {
                         setLoading(false)
                       }}
                       onEnded={() => {
                         router.push("/login")
                       }}
          />
        </div>

      </Spin>

    </div>
  );
};

export default HomePage;
