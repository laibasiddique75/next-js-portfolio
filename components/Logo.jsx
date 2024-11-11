'use client';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
    
    <Link href='/'>
    <Image src='/LaibaLogo.png' width={54} height={54} priority alt="bn"/>
    
    </Link>
    </div>
  )
}

export default Logo
