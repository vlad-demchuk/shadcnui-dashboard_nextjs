import UserItem from '@/components/sidebar/user-item';
import SidebarMenu from '@/components/sidebar/menu';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 w-[300px] min-h-screen shrink-0 p-3 border-r">
      <UserItem />
      <SidebarMenu />
      <section>Settings / Notification</section>
    </aside>
  );
}
