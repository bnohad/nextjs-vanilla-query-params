"use client";

import ParamsHandler from "@/components/params-handler";
import {Suspense, useState} from "react";

export default function Home() {
    const [params, setParams] = useState<Record<string, any>>({});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
        <div className='p-5 border-amber-500 border border-dashed rounded-xl'>
            <h4 className='text-red-500'>&lt;app/page.tsx&gt;</h4>
            <h1 className='text-4xl'>Good <span className='text-amber-500 underline'>Query</span> params</h1>

        <div className='p-5 border-amber-500 border border-dashed rounded-xl'>
            <h4 className='text-red-500'>&lt;Suspense&gt;</h4>
                <Suspense>
                    <ParamsHandler onChange={setParams} />
                </Suspense>
            <h4 className='text-red-500'>&lt;/Suspense&gt;</h4>
            </div>

        <div>
            <h1>THE PARAMS</h1>
            <span>{JSON.stringify(params)}</span>
        </div>

            <h4 className='text-red-500'>&lt;/ app/page.tsx&gt;</h4>
        </div>
    </main>
  );
}
