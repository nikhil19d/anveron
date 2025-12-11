export function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(' '); // ["04:00", "PM"]
  let [hours] = time.split(':').map(Number)
  const minutes = time.split(':').map(Number)[1]
  if (modifier === 'PM' && hours < 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

