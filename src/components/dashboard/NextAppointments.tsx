import { getUserAppointments } from '@/lib/actions/appointments';
import { format, isAfter, isSameDay, parseISO } from 'date-fns';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';
import NoNextAppointments from './NoNextAppointment';

async function NextAppointment() {
  const appointments = await getUserAppointments();

  // filter for upcoming CONFIRMED appointments only (today or future)
  const upcomingAppointments =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isUpcoming && appointment.status === 'CONFIRMED';
    }) || [];

  // get the next appointment (earliest upcoming one)
  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />; // no appointments, return nothing

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate, 'EEEE, MMMM d, yyyy');
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
                    <svg id="Capa_1" enableBackground="new 0 0 511.977 511.977" viewBox="0 0 511.977 511.977" xmlns="http://www.w3.org/2000/svg" className="size-5 text-yellow-500 fill-current"><g><path d="m14.977 390.988h392c3.516 0 6.914-1.23 9.609-3.472 3.765-3.153 89.652-77.038 94.889-236.528h-421c-5.217 144.774-84.315 212.822-85.137 213.501-4.819 4.072-6.592 10.723-4.424 16.641 2.153 5.903 7.764 9.858 14.063 9.858z"/><path d="m496.976 60.988h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-76v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75c-8.4 0-15 6.6-15 15v45h421v-45c0-8.4-6.6-15-15-15z"/><path d="m435.849 410.515c-8.145 6.782-18.369 10.474-28.872 10.474h-316v45c0 8.291 6.709 15 15 15h391c8.291 0 15-6.709 15-15v-168.146c-28.92 70.951-69.276 106.937-76.128 112.672z"/></g></svg>
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">
              {isToday ? 'Today' : 'Upcoming'}
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            {nextAppointment.status}
          </span>
        </div>

        {/* Appointment Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <UserIcon className="size-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">
                {nextAppointment.doctorName}
              </p>
              <p className="text-xs text-muted-foreground">
                {nextAppointment.reason}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <CalendarIcon className="size-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{formattedDate}</p>
              <p className="text-xs text-muted-foreground">
                {isToday ? 'Today' : format(appointmentDate, 'EEEE')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <ClockIcon className="size-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{nextAppointment.time}</p>
              <p className="text-xs text-muted-foreground">Local time</p>
            </div>
          </div>
        </div>

        {/* More Appointments Count */}
        {upcomingAppointments.length > 1 && (
          <p className="text-xs text-center text-muted-foreground">
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? 's' : ''}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default NextAppointment;
