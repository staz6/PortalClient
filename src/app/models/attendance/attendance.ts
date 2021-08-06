export interface Attendance {
  id: number;
  shiftTiming: string;
  checkIn: Date;
  checkOut: Date;
  date: string;
  workedHours: string;
  effectiveHours: string;
  status: string;
}
