import { Card, CardContent } from '@/components/ui/card';

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
}

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
}: AdminStatsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
              <svg
                id="Layer_25"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-secondary"
                fill="currentColor"
              >
                <path d="m410.623 427.909h85.284c8.874 0 16.093-7.219 16.093-16.094v-14.249c0-48.649-39.579-88.228-88.228-88.228h-35.039c17.82 21.735 28.529 49.519 28.529 79.752v17.376c0 7.95-2.452 15.335-6.639 21.443zm-259.753 0h228.378c11.823 0 21.443-9.619 21.443-21.442v-17.376c0-60.326-49.079-109.404-109.404-109.404h-70.574c-60.325 0-109.404 49.078-109.404 109.404v17.376c0 11.823 9.619 21.442 21.442 21.442zm-62.642-118.57c-48.649 0-88.228 39.578-88.228 88.228v14.249c0 8.874 7.219 16.094 16.093 16.094h85.284c-4.188-6.108-6.639-13.493-6.639-21.442v-17.376c0-30.233 10.709-58.017 28.528-79.752h-35.038zm241.577-72.721c.504.692.909 1.473 1.187 2.331 9.025 27.872 34.787 46.597 64.105 46.597 37.149 0 67.373-30.223 67.373-67.373s-30.224-67.373-67.374-67.373c-13.86 0-27.076 4.137-38.37 11.986.091 1.748.137 3.508.137 5.278 0 26.468-10.281 50.581-27.058 68.554zm-212.377-85.818c-37.149 0-67.372 30.224-67.372 67.374s30.223 67.373 67.372 67.373c29.358 0 55.13-18.76 64.131-46.681.278-.862.683-1.647 1.188-2.34-16.728-17.963-26.972-42.037-26.972-68.461 0-1.743.045-3.48.133-5.201-11.317-7.901-24.572-12.064-38.48-12.064zm138.891-66.709c-46.303 0-83.973 37.67-83.973 83.973s37.67 83.973 83.973 83.973 83.973-37.67 83.973-83.973-37.67-83.973-83.973-83.973z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{totalDoctors}</div>
              <div className="text-sm text-muted-foreground">Total Doctors</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
              <svg
                id="Layer_1"
                enableBackground="new 0 0 512.112 512.112"
                height="512"
                viewBox="0 0 512.112 512.112"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-secondary"
                fill="currentColor"
              >
                <g>
                  <path d="m259.203 400.653c0-52.089 28.315-97.683 70.358-122.216-134.643-99.299-330.486-.288-329.558 168.283v50.333c0 8.284 6.716 15 15 15h298.611c-33.098-25.903-54.411-66.208-54.411-111.4z" />
                  <path d="m327.236 119.486c0-65.961-53.472-119.433-119.433-119.433-158.426 6.291-158.38 232.6.001 238.867 65.96 0 119.432-53.473 119.432-119.434z" />
                  <path d="m495.757 342.779-84.548 84.548c-5.856 5.858-15.361 5.854-21.213 0l-32.133-32.134c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.857 15.355-5.859 21.213 0l21.526 21.527 76.115-76.115c-69.666-66.239-187.817-15.884-187.514 81.262-.001 61.425 49.973 111.399 111.399 111.399 86.014.84 140.492-96.822 95.155-169.274z" />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{activeDoctors}</div>
              <div className="text-sm text-muted-foreground">
                Active Doctors
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
              <svg
                id="Слой_1"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-secondary"
                fill="currentColor"
              >
                <g>
                  <path d="m480.727 79.333v-43.105c0-10.645-8.624-19.292-19.292-19.292-10.673 0-19.292 8.647-19.292 19.292v37.123h-98.38v-37.123c0-10.645-8.624-19.292-19.291-19.292-10.673 0-19.292 8.647-19.292 19.292v37.123h-98.38v-37.123c0-10.645-8.624-19.292-19.292-19.292-10.672 0-19.291 8.647-19.291 19.292v37.123h-98.38v-37.123c0-10.645-8.624-19.292-19.292-19.292-10.673 0-19.292 8.647-19.292 19.292v43.114c-18.442 9.152-31.253 27.991-31.253 49.953v64.049h512v-64.049c0-21.967-12.82-40.811-31.273-49.962z" />
                  <path d="m0 439.12c0 30.864 25.075 55.944 55.944 55.944h400.108c30.868 0 55.944-25.08 55.944-55.944v-207.197h-511.996z" />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{totalAppointments}</div>
              <div className="text-sm text-muted-foreground">
                Total Appointments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center">
              <svg
                id="Layer_1"
                enableBackground="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 text-secondary"
                fill="currentColor"
              >
                <path
                  clipRule="evenodd"
                  d="m256.003 512.003c-141.165 0-256.003-114.837-256.003-256.003 0-141.158 114.844-256.003 256.003-256.003s255.997 114.845 255.997 256.003c0 141.165-114.832 256.003-255.997 256.003zm117.469-168.548c5.902-7.925 4.262-19.126-3.665-25.029l-95.914-71.402v-154.685c0-9.871-8.006-17.887-17.889-17.887-9.884 0-17.885 8.016-17.885 17.887v163.661c0 5.657 2.669 10.979 7.21 14.355l103.113 76.767c3.212 2.392 6.957 3.543 10.68 3.543 5.453 0 10.843-2.492 14.35-7.21z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{completedAppointments}</div>
              <div className="text-sm text-muted-foreground">
                Completed Appointments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default AdminStats;
