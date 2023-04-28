'use client';

import Image from "next/image";
import {useRouter} from "next/navigation";

const logo = ()=> {
    const Router = useRouter ();

    return (
        <image
        //alt='logo'
        className='hidden md:block cursor-pointer'
        height={100}
        width={100}
        href="/images/Logo.png" //src is not working
        />
    )
}

export default logo;