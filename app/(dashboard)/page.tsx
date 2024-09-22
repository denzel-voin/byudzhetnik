import { UserButton } from '@clerk/nextjs';
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <UserButton afterSignOutUrl='/' />
  );
}
