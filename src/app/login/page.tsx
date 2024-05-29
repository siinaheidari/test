'use client'
import React, {FC, useState} from 'react';
import BottomSheet from "@/app/components/bottom-sheet";
import {Controller, useForm} from "react-hook-form";
import {Button, Input, Modal, Radio} from "antd";
import {UserOutlined} from "@ant-design/icons";
import musicLottie from "../../../public/assets/lottie/music.json"
import Lottie from "lottie-react";
import {ReactTyped} from "react-typed";


type TForm = {
    name: string,
    password: string
    gender: number
}

const AboutPage: FC = () => {
    const [open, setOpen] = useState(false);
    const {register, handleSubmit, formState: {errors}, control, watch} = useForm<TForm>()
    const [openModal, setOpenModal] = useState(0)
    const genderWatch: number = watch("gender")

    const handleSubmitForm = () => {
        setOpen(false)
        setOpenModal(genderWatch)
    }


    return (
        <div>
            <BottomSheet
                onClose={() => setOpen(false)}
                isOpen={open}
                className={"overflow-auto"}
                snapPoints={[700, 400, 0]}
            >
                <div className={"relative h-full"}>
                    <div className={"text-[30px] text-center font-bold text-[#303030]"}>
                        <ReactTyped strings={["Login"]} typeSpeed={80}/>
                    </div>
                    <div className={"text-[40px] text-center font-bold text-[#A6031A]"}>
                        <Lottie animationData={musicLottie} className={"size-[290px] mx-auto"}/>
                    </div>
                    <form onSubmit={handleSubmit(handleSubmitForm)} className={"space-y-1"} autoComplete="nope">
                        <div>
                            <label>name :</label>
                            <div>
                                <Controller<TForm>
                                    control={control}
                                    name="name"
                                    rules={{required: "name is required"}}
                                    render={({field, fieldState}) => (
                                        <Input
                                            placeholder={"name"}
                                            autoComplete="new-sssss"
                                            {...field}
                                            suffix={<UserOutlined className={fieldState.invalid ? 'icon-error' : ''}/>}
                                            className={fieldState.invalid ? 'error' : 'custom-input'}
                                            // onChange={e => console.log(e.target.value)}
                                        />
                                    )}
                                />
                                {errors.name && <p className='error-message'>{errors.name.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label>password :</label>
                            <div>
                                <Controller<TForm>
                                    name="password"
                                    control={control}
                                    rules={{required: "password is required"}}
                                    render={({field, fieldState}) => (
                                        <Input.Password
                                            placeholder={"password"}
                                            {...field}
                                            autoComplete="new-password"
                                            className={fieldState.invalid ? 'error' : 'custom-input'}
                                        />
                                    )}
                                />
                                {errors.password && (<p className='error-message'>{errors.password.message}</p>)}
                            </div>
                        </div>

                        <div>
                            <label>gender :</label>
                            <div>
                                <Controller<TForm>
                                    name="gender"
                                    control={control}
                                    rules={{required: "gender is required"}}
                                    render={({field, fieldState}) => (
                                        <Radio.Group {...field}>
                                            <Radio value={1}>woman</Radio>
                                            <Radio value={2}>men</Radio>

                                        </Radio.Group>
                                    )}
                                />
                                {errors.gender && (<p className='error-message'>{errors.gender.message}</p>)}
                            </div>
                        </div>

                        <div className={"absolute bottom-[2rem] w-full"}>
                            <Button htmlType={"submit"} type={"primary"} block>
                                submit
                            </Button>
                        </div>
                    </form>

                </div>
            </BottomSheet>

            <div className={`${open === true ? "hidden" : ""} absolute bottom-[2rem] w-full px-3`}>
                <Button onClick={() => setOpen(true)} block>
                    login</Button>
            </div>


            <Modal destroyOnClose open={openModal === 1} footer={false} onCancel={() => setOpenModal(0)}>

                <video className={"bg-cover object-cover !h-[calc(100%-42px)] !size-full"} autoPlay playsInline
                       controls={false} preload="none">
                    <source src={"https://github.com/siinaheidari/test/raw/main/public/assets/videos/mosa.mp4"}
                            type="video/mp4"/>
                </video>

            </Modal>


            <Modal destroyOnClose open={openModal === 2} footer={false} onCancel={() => setOpenModal(0)}>
                
                <video className={"bg-cover object-cover !h-[calc(100%-42px)] !size-full"} autoPlay playsInline
                       controls={false} preload="none">
                    <source src="https://github.com/siinaheidari/test/raw/main/public/assets/videos/parsafar.mp4"
                            type="video/mp4"/>
                </video>

            </Modal>

        </div>
    );
};


export default AboutPage;
