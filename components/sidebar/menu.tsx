import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import Link from 'next/link';
import { BellRing, Cookie, CreditCard, Inbox, Logs, Settings, User } from 'lucide-react';

export default function SidebarMenu() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          title: 'Profile',
          icon: <User />,
          link: '/profile',
        },
        {
          title: 'Inbox',
          icon: <Inbox />,
          link: '/inbox',
        },
        {
          title: 'Billing',
          icon: <CreditCard />,
          link: '/billing',
        },
        {
          title: 'Notifications',
          icon: <BellRing />,
          link: '/notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          title: 'General Settings',
          icon: <Settings />,
          link: '/settings',
        },
        {
          title: 'Privacy',
          icon: <Cookie />,
          link: '/privacy',
        },
        {
          title: 'Logs',
          icon: <Logs />,
          link: '/logs',
        },
      ],
    },
  ];

  return (
    <nav className="grow">
      <Command>
        <CommandList className="overflow-visible">
          {menuList.map((menu, index, array) => (
            <>
              <CommandGroup
                key={menu.group}
                heading={menu.group}
              >
                {menu.items.map(item => (
                  <CommandItem key={item.title}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 size-full"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>

              {index < array.length - 1 && <CommandSeparator />}
            </>
          ))}
        </CommandList>
      </Command>

    </nav>
  );
}
