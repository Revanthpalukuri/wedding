// Calendar generator for Google Calendar & Apple/Outlook (.ics)
// Automatically sets exact 30-minute duration for each event

export const getEventCalendarDates = (event) => {
  // Determine event date
  let dateStr = '20261219';
  if (event?.date?.includes('18')) dateStr = '20261218';
  if (event?.date?.includes('20')) dateStr = '20261220';

  let startHours = 3;
  let startMinutes = 35;

  // Extract start time from event.time (e.g. "09:00 AM IST", "11:30 AM IST", "06:30 PM IST", "03:35 AM IST")
  if (event?.time) {
    const timeMatch = event.time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (timeMatch) {
      let h = parseInt(timeMatch[1], 10);
      const m = parseInt(timeMatch[2], 10);
      const ampm = timeMatch[3].toUpperCase();

      if (ampm === 'PM' && h < 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;

      startHours = h;
      startMinutes = m;
    }
  }

  // Exactly 30 minutes duration for each calendar event
  let endHours = startHours;
  let endMinutes = startMinutes + 30;
  if (endMinutes >= 60) {
    endHours = (endHours + 1) % 24;
    endMinutes -= 60;
  }

  const pad = (n) => String(n).padStart(2, '0');
  const startTime = `${pad(startHours)}${pad(startMinutes)}00`;
  const endTime = `${pad(endHours)}${pad(endMinutes)}00`;

  return {
    start: `${dateStr}T${startTime}`,
    end: `${dateStr}T${endTime}`,
  };
};

export const createGoogleCalendarUrl = (event) => {
  const { start, end } = getEventCalendarDates(event);
  const title = encodeURIComponent(`Vivek & Varshini Wedding: ${event.title}`);
  const details = encodeURIComponent(
    `${event.description || ''}\n\nDate: ${event.date}\nTime: ${event.time}\nVenue: ${event.venue}\n\nJoin us to celebrate the auspicious ceremony!`
  );
  const location = encodeURIComponent(event.venue || 'Kshatriya Kalyana Mandapam, Amalapuram');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
};
