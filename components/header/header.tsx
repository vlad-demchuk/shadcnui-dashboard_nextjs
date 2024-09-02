'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HeaderMenu } from '@/components/header/menu';
import { Button } from '@/components/ui/button';
import { BellIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: 'Notification 1',
      date: '02-01-2015',
      read: false,
    },
    {
      text: 'Notification 2',
      date: '02-01-2015',
      read: true,
    },
  ]);
  return (
    <header className="grid grid-cols-2 gap-4 items-center p-3 border-b">
      <nav className="w-full">
        <HeaderMenu />
      </nav>

      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative"
            >
              <BellIcon className="h-4 w-4" />
              <div
                className={
                  `absolute -top-2 -right-1 size-3 rounded-full my-1 ${notifications.every((notification: any) => notification.read)
                    ? 'bg-green-400'
                    : 'bg-red-500'}
                  `}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[300px]"
            align="end"
          >
            {notifications.map((notification: any) => (
              <DropdownMenuItem
                key={notification.text}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-center gap-2"
              >
                <div
                  className={
                    `size-3 rounded-full my-1 ${notification.read
                      ? 'bg-green-400'
                      : 'bg-red-500'}
                  `}
                />
                <p>{notification.text}</p>
                <p className="text-xs text-neutral-500">{notification.date}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

    </header>
  );
}
