"use client"

import {ConfigProvider} from 'antd';
import faIR from 'antd/locale/fa_IR';
import {FC, PropsWithChildren, useEffect, useMemo, useRef} from "react";
import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import {useServerInsertedHTML} from "next/navigation";
import Entity from "@ant-design/cssinjs/es/Cache";
//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const Providers: FC<PropsWithChildren> = ({children}) => {
    const cache = useMemo<Entity>(() => createCache(), []);
    const isServerInserted = useRef(false);

    useServerInsertedHTML(() => {
        isServerInserted.current = true;
        return <style
            id="antd"
            data-rc-priority="-999"
            data-css-hash="jmcbix23"
            data-token-hash="66swa22"
            data-cache-path="66swa22|antdStyles"
            dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}}
        />;
    });

    useServerInsertedHTML(() => {
        // avoid duplicate css insert
        if (isServerInserted.current) return;

        isServerInserted.current = true;

        return <style
            id="antd"
            data-rc-priority="-999"
            data-css-hash="jmcbix23"
            data-token-hash="66swa22"
            data-cache-path="66swa22|antdStyles"
            dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}}
        />;
    });


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const queryClient = new QueryClient()
    return (
        <StyleProvider cache={cache}>
            <QueryClientProvider client={queryClient}>
                <ConfigProvider
                    // direction={'rtl'}
                    // direction={ dir() }
                    // locale={ language === 'fa' ? faIR : enUS }
                    locale={faIR}
                    theme={{
                        token: {
                            colorBgLayout: '#000'
                        },
                        components: {
                            Form: {
                                itemMarginBottom: 20,
                                verticalLabelMargin: 0,
                                verticalLabelPadding: .7,

                            },
                            Layout: {
                                // siderBg: '#556EBF',
                            },
                            Button: {
                                controlHeight: 41,
                                colorPrimary: '#4387FE',

                            },
                            Input: {
                                controlHeight: 41,
                                controlHeightLG: 38,
                                controlHeightSM: 32,

                                activeShadow: '0 0 0 2px rgba(64, 81, 137, 0.1)',
                                borderRadius: 4,
                            },
                            Select: {
                                controlHeight: 41,
                                colorText: "#353535",
                            },
                            Table: {
                                headerBorderRadius: 0,
                                colorText: '#353535',
                                colorTextHeading: '#11182E',
                            },
                            Switch: {
                                handleBg: '#FFFFFF',
                                colorPrimary: '#E5E7EB',
                                colorPrimaryHover: '#E5E7EB',
                                handleSize: 27,
                                trackMinWidth: 46,
                                trackPadding: -2.65,

                            },

                            Radio: {
                                dotSize: 5,
                                colorPrimary: '#556EBF',
                                colorBorder: '#556EBF ',
                            },
                            Steps: {
                                padding: 12,
                            },

                        },
                    }}
                >
                    {children}
                </ConfigProvider>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </StyleProvider>
    );
};

export default Providers;
