import UserItem from '@/components/user-item';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 w-[300px] min-h-screen shrink-0 p-3 border-r">
      <UserItem />
      <section className="grow">Menu</section>
      <section>Settings / Notification</section>
    </aside>
  );
}
