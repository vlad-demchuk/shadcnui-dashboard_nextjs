export default function UserItem() {
  return (
    <section className="flex justify-between items-center  gap-2 p-2 border rounded-xl">
      <div className="avatar flex shrink-0 justify-center items-center size-10 bg-emerald-500 rounded-full text-white font-bold">
        VD
      </div>

      <div>
        <p className="font-bold text-md">Vladyslav Demchuk</p>
        <p className="text-xs text-neutral-500">vladyslavdemchuk1999@gmail.com</p>
      </div>
    </section>
  );
}
