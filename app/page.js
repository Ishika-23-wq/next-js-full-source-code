"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation';
export default function Home() {
   const router=useRouter()
   const handleRedirect=()=>{
    router.push('/dashboard');
   }
  return (
    <div>
     <Link href="/contact">Contact</Link>
     <br></br>
     <button onclick={handleRedirect}>Go to Dashboard</button>
  </div>
  );
}
