"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function ParamsHandler({onChange}: {onChange: (params: Record<string, any>) => void}) {
    const params = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [value, setValue] = useState<string>('?one=1&two=2');

    const [selectedParams, setSelectedParams] = useState<Record<string, string> | null>(null);

    useEffect(() => {
        const current: Record<string, string> = Array.from(params.entries())
            .reduce((ret, [k, v]) => {
                ret[k] = v;

                return ret;
        }, {} as Record<string, string>);

        setSelectedParams(current)
        if(typeof onChange === 'function') {
            onChange(current);
        }
    }, [params]);

    return (
        <div className='p-5 border-amber-500 border border-dashed rounded-xl'>
            <h4 className='text-red-500'>&lt;ParamsHandler&gt;</h4>
            THIS IS THE PARAMS:
            <br/>
            {JSON.stringify(selectedParams)}
            <br/><br/>
            <input className='text-black' defaultValue={value} onChange={(e) => setValue(e.target.value)}/>
            <button className='bg-gray-500 p-2 text-white rounded-2xl' onClick={() => router.push(`${pathname}${value}`)}>Update params</button>
            <h4 className='text-red-500'>&lt;/ParamsHandler&gt;</h4>
        </div>
    )
}