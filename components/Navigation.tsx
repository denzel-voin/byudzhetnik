'use client';

import { NavButton } from '@/components/NavButton';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const routes = [
  {
    href: '/',
    label: 'Главная',
  },
  {
    href: '/transactions',
    label: 'Транзакции',
  },
  {
    href: '/accounts',
    label: 'Аккаунты',
  },
  {
    href: '/categories',
    label: 'Категории',
  },
  {
    href: '/settings',
    label: 'Настройки',
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const isMobile = useMedia('(max-width: 1024px)', false);

  const handleClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route, index) => (
              <Button
                variant={route.href === pathName ? 'secondary' : 'ghost'}
                key={index}
                onClick={() => handleClick(route.href)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route, index) => (
        <NavButton
          key={index}
          href={route.href}
          label={route.label}
          isActive={pathName === route.href}
        />
      ))}
    </nav>
  );
};
