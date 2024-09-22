import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  label: string;
  href: string;
  isActive: boolean;
};

export const NavButton = ({ href, isActive, label }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'w-full lg:w-auto justify-between font-normal hover:bg-white/20 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition',
        isActive ? 'bg-amber-800' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
