'use client';

import { ResponsiveCalendar } from '@nivo/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Calendar() {
  const data = [
    {
      "value": 346,
      "day": "2017-04-13"
    },
    {
      "value": 177,
      "day": "2017-14-12"
    },
    {
      "value": 243,
      "day": "2017-04-11"
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>The result of this week.</CardDescription>
      </CardHeader>

      <CardContent className="h-[140px] flex items-center w-full">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
}

const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
  <ResponsiveCalendar
    data={data}
    from="2017-07-11"
    to="2017-07-13"
    align="top-left"
    emptyColor="#eeeeee"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{ top: 20, right: 0, bottom: 0, left: 20 }}
    yearLegendOffset={6}
    monthBorderWidth={0}
    monthBorderColor="#ffffff"
    monthLegendOffset={9}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left'
      }
    ]}
  />
)
