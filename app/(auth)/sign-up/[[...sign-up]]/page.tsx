import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import {Loader2} from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-full lg:flex flex-col items-center justify-center px-4'>
                <div className='text-center space-y-4 pt-16'>
                    <h1 className='font-bold text-3xl'>Добро пожаловать!</h1>
                    <p className='text-base'>Авторизуйтесь или создайте Аккаунт для использования приложения!</p>
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <ClerkLoaded>
                        <SignUp path={'/sign-up'} />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className='animate-spin text-muted-foreground' />
                    </ClerkLoading>
                </div>
            </div>
            <div className='h-full bg-violet-800 hidden lg:flex items-center justify-center flex-col'>
                <Image src='/logo.png' width={300} height={300} alt='logo' />
            </div>
        </div>
    )
}
