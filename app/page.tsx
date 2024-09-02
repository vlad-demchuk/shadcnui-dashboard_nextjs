import General from '@/components/general';
import { Card } from '@/components/ui/card';
import Calendar from '@/components/calendar';

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <section>
          <General />
        </section>

        <section className="grid gap-4">
          <Calendar />
          <Calendar />
        </section>
      </div>

      <section className="grid grid-cols-3 gap-8">
        <Card className="h-[300px]">card</Card>
        <Card className="h-[300px]">card</Card>
        <Card className="h-[300px]">card</Card>
      </section>
    </div>
  );
}
