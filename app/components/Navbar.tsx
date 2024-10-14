'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import Image from 'next/image'
import localFont from 'next/font/local'


interface UrlObj {
    url: string,
    name: string
}

const arrayLinks: UrlObj[] = [
    { url: '/products', name: 'Productos' },
    { url: '/info', name: 'Info' },
];


const iphoneFont = localFont({
    src: "../fonts/SF-Pro-Display-Thin.otf",
    variable: "--font-SF",
    weight: "100 900",
}
);


// colors black: #09090b or #0e1111

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className='w-full bg-[#0e1111]'>

            <div className="max-w-[1536px] mx-auto flex flex-row justify-between py-3 px-5 text-white    sm:py-4   md:py-5   lg:px-8 lg:py-8   2xl:px-0">
                <div className='w-[180px] h-10 flex flex-row justify-between items-center   lg:h-6 lg:w-[200px] 2xl:w-[220px]'>

                    <Link href='/' className='w-[80%] flex justify-between items-center lg:w-[90%] 2xl:w-full'>
                        <Image className='w-[30%] ' width={200} height={300} src={'/images/logo/appleTecnoCh.png'} alt={'logo'} />
                        <p className={`${iphoneFont.className} text-xl lg:text-2xl 2xl:text-3xl`}>AppleTecno</p>
                    </Link>

                </div>

                <div className='w-[115px] flex flex-row justify-between items-center    xl:w-[140px]'>
                    {arrayLinks.map((link) => (
                        <Link key={link.url} href={link.url} className={` ${pathname === link.url ? '  underline underline-offset-4' : ''}  2xl:text-lg `}>{link.name}</Link>
                    ))
                    }
                </div>
            </div>


        </nav>

    )
}