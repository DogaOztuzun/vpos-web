import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import { useEffect, useRef } from 'react';
import { QrIcon } from "../assets";


interface Props {
    ready: boolean
    qrCodeSuccessCallback: any
    qrCodeErrorCallback: any

}

interface Config {
    localMediaStream?: boolean
    aspectRatio?: number
    disableFlip?: boolean
    qrRegion?: string
    fps: number
    qrbox: number
    supportedScanTypes: Array<Html5QrcodeScanType>
}

const id = "qrcode-scanner";
// Creates the configuration object for Html5QrcodeScanner.
let config: Config = {
    localMediaStream: false,
    aspectRatio: 1,
    disableFlip: false,
    qrbox: 160,
    fps: 60,
    supportedScanTypes: []
}

export default function Html5Qr({ qrCodeErrorCallback, qrCodeSuccessCallback, ready }: Props) {
    let html5QrcodeScanner = useRef(null)

    useEffect(() => {

        if (ready) {
            Html5Qrcode.getCameras().then((devices) => {
                if (devices && devices.length) {
                    html5QrcodeScanner.current = new Html5Qrcode(id);
                    html5QrcodeScanner.current.start(
                        { facingMode: "environment" },
                        config,
                        qrCodeSuccessCallback,
                        qrCodeErrorCallback
                    );
                }
            });
        }

        return () => {
            if (html5QrcodeScanner.current) {
                html5QrcodeScanner.current.stop().catch((error: any) => {
                    console.log("Failed to clear html5QrcodeScanner. ", error);
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready])

    let style = { width: ready && '200px', height: ready && '200px' }
    return (
        <>
            {!ready && <QrIcon width='200px' height='200px' />}
            <div id={id} style={style} />
        </>
    )
};