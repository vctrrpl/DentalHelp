import { getUserAppointmentsStats } from '@/lib/actions/appointments';
import { currentUser } from '@clerk/nextjs/server';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { MessageSquareIcon } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from '../ui/button';

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentsStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
                    <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="size-5 text-yellow-500 fill-current"><path d="m455.639 477.513c-1.195 5.087-6 9.2-12.84 11-8.662 2.285-21.428.91-31.337-9.772-27.911-32.544-52.279-40.264-73.792-47.076-20.761-6.578-37.493-11.9-53.643-39.365a82.607 82.607 0 0 0 26.1-20.074c7.4 15.622 20.582 28.884 38.223 38.139a110.415 110.415 0 0 0 50.75 12.563 94.258 94.258 0 0 0 24.23-3.077 78.269 78.269 0 0 0 18.022 31.94c.169.18.349.349.54.519 10.373 9.053 15.376 18.244 13.747 25.203zm-154.975-383.813a135.714 135.714 0 0 1 56.805 11.824 142.393 142.393 0 0 1 45.542 33.094c6.155-11.148 16.15-19.524 29.846-25 8.007-17.778 6-35.7-5.584-48.386-12.681-13.9-32.956-17.674-52.977-9.889-8.207 4.156-12.247 9.656-12.691 17.281a7.405 7.405 0 0 1 -7.383 6.981c-.148 0-.285-.011-.433-.021a7.406 7.406 0 0 1 -6.97-7.816c.613-10.64 5.373-19.228 14.162-25.616-10.186-14.564-24-22.866-39.471-23.554-17.24-.751-34.2 7.88-47.467 23.924 16.7 11.998 25.627 27.82 26.621 47.178zm208.079 174.168c-6.875 14.892-26.6 27.637-55.2 22.539a7.409 7.409 0 0 0 -7.816 10.8c16.224 30.164 21.417 54.045 15.463 70.978-4.622 13.1-15.833 23.057-35.294 31.306-20.719 7.869-48.429 5.426-70.66-6.24-17.636-9.251-29.855-23.037-34.721-39.039 1.449-2.338 2.824-4.728 4.115-7.213a111.658 111.658 0 0 0 9.18-24.262 102.975 102.975 0 0 0 25.975 3.606c22.814 0 41.714-9.35 56.425-28a7.4 7.4 0 1 0 -11.623-9.169c-16.393 20.761-38.752 26.98-68.218 18.921a86.031 86.031 0 0 0 -3.289-35.156 7.407 7.407 0 1 0 -14.088 4.58c6.018 18.561 3.216 41.988-7.509 62.654-9.73 18.741-24.452 32.353-40.423 37.387-49.3 11-84.843 3.258-108.206-23.68 25.161-4.03 44.008-16.182 56.139-36.266a7.407 7.407 0 1 0 -12.681-7.658c-11.6 19.217-30.344 29.18-57.271 30.46-25.933-1.258-46.367-11.338-62.475-30.809a7.417 7.417 0 0 0 -7.35-2.506c-28.757 6.515-58.445-7.467-72.194-34-13.548-26.134-7.234-56.066 16.721-81.565a82.277 82.277 0 0 0 25.584 28.619 51.612 51.612 0 0 0 -2.549 24.379 7.4 7.4 0 0 0 7.33 6.409 8.029 8.029 0 0 0 .994-.063 7.4 7.4 0 0 0 6.346-8.324 37.287 37.287 0 0 1 31.909-41.893 7.406 7.406 0 0 0 -1.978-14.68 51.868 51.868 0 0 0 -35.061 20.963 66.616 66.616 0 0 1 -23.3-30.651c-10.037-27.879-4.04-57.376 16.055-78.92 19.122-20.5 46.293-29.35 74.215-24.643-9.075 16.1-10.926 32.6-5.511 49.243a69.585 69.585 0 0 0 -37.334 34.849 7.4 7.4 0 1 0 13.357 6.389 54.927 54.927 0 0 1 104.019 16.267 7.4 7.4 0 0 0 5.722 6.229 7.023 7.023 0 0 0 1.618.18 7.389 7.389 0 0 0 6.208-3.374 64.632 64.632 0 0 1 89.244-19.122 7.4 7.4 0 0 0 8.038-12.438 79.5 79.5 0 0 0 -100 11.306 69.884 69.884 0 0 0 -74.584-44.537c-.666.1-1.333.191-1.988.307-5.183-15.378-2.232-30.29 8.937-45.436 36.386-39.608 75.186-46.747 118.613-21.808 16.753 9.846 25.352 22.887 26.23 39.735-20 2.094-40.434 8.186-60.571 18.234a7.407 7.407 0 0 0 6.621 13.252c41.893-20.92 83.2-23.332 119.47-6.981 36.489 16.457 64.706 51.613 77.916 96.859a51.579 51.579 0 0 0 -22.9 30.174 7.4 7.4 0 0 0 5.1 9.149 7.391 7.391 0 0 0 9.149-5.109 37.171 37.171 0 0 1 45.958-25.626 7.406 7.406 0 1 0 4.051-14.247 51.654 51.654 0 0 0 -27.672-.227 186.277 186.277 0 0 0 -29.455-58.837c4.241-11.475 13.009-19.524 26.737-24.526 24.706-4.611 42.559 8.757 51.052 22.9 10.671 17.768 9.677 38.942-2.528 53.95a7.384 7.384 0 0 0 1.037 10.386c19.894 16.365 26.969 36.545 18.921 53.995zm-119.524-86.028a62.3 62.3 0 0 0 -74.436 35.96c-21.819-10.333-44.981-14.955-67.657-13.093-37.884 3.12-72.585 24.135-98.212 59.322a62.081 62.081 0 0 0 -26.758 1.026 7.406 7.406 0 0 0 3.744 14.331 47.538 47.538 0 0 1 45.8 12.565 7.4 7.4 0 0 0 10.555-10.386 61.972 61.972 0 0 0 -18.35-12.85c22.866-29.582 51.887-46.568 84.441-49.244 36.386-39.608 75.135 13.316 105.457 44.812a7.405 7.405 0 1 0 10.672-10.27 175.678 175.678 0 0 0 -36.541-29.2 47.453 47.453 0 0 1 57.239-28.725 7.406 7.406 0 0 0 4.05-14.247z"/></svg>
          Your Dental Health
        </CardTitle>
        <CardDescription>
          Keep track of your dental care journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {appointmentStats.completedAppointments}
            </div>
            <div className="text-sm text-muted-foreground">
              Completed Visits
            </div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {appointmentStats.totalAppointments}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Appointments
            </div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">
              {user?.createdAt
                ? format(new Date(user.createdAt), 'MMM yyyy')
                : 'N/A'}
            </div>
            <div className="text-sm text-muted-foreground">Member Since</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="size-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">
                Ready to get started?
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Book your first appointment or try our AI voice assistant for
                instant dental advice.
              </p>
              <div className="flex gap-2">
                <Link href="/voice">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Try AI Assistant
                  </Button>
                </Link>
                <Link href="/appointments">
                  <Button size="sm" variant="outline">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;
