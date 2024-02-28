import { useEffect, useState } from "react";

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

const getDevice = (): DeviceType => {
    const mobileQuery = window.matchMedia('(max-width: 576px)');
    const tabletQuery = window.matchMedia('(min-width: 577px) and (max-width: 768px)');

    if (mobileQuery.matches) {
        return 'mobile';
    }
    if (tabletQuery.matches) {
       return 'tablet';
    } 
    else {
        return 'desktop';
    }
};

export const useDevice = (): DeviceType => {
    const [device, setDevice] = useState<DeviceType>(() => getDevice());

    const handleWindowResize = () => {
        const currentDevice = getDevice() ?? 'desktop';

        if (currentDevice !== device) {
            setDevice(currentDevice);
        }
    }

    useEffect(() => {        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return device;
}