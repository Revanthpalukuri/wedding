// Calendar generator for Google Calendar & Apple/Outlook (.ics)
export const getEventCalendarDates = (event) => {
  let dateStr = '20261219';
  if (event?.date?.includes('18')) dateStr = '20261218';
  if (event?.date?.includes('20')) dateStr = '20261220';

  let startTime = '033500';
  let endTime = '063500';

  if (event?.time?.includes('10:00 AM') || event?.time?.includes('10 AM')) {
    startTime = '100000';
    endTime = '130000';
  } else if (event?.time?.includes('07:00 PM') || event?.time?.includes('7 PM') || event?.time?.includes('07:30 PM')) {
    startTime = '190000';
    endTime = '230000';
  } else if (event?.time?.includes('03:35 AM')) {
    startTime = '033500';
    endTime = '063500';
  }

  return {
    start: `${dateStr}T${startTime}`,
    end: `${dateStr}T${endTime}`,
  };
};

export const createGoogleCalendarUrl = (event) => {
  const { start, end } = getEventCalendarDates(event);
  const title = encodeURIComponent(`Vivek & Varshini Wedding: ${event.title}`);
  const details = encodeURIComponent(
    `${event.description || ''}\n\nDate: ${event.date}\nTime: ${event.time}\nVenue: ${event.venue}\n\nJoin us to celebrate the holy union!`
  );
  const location = encodeURIComponent(event.venue || 'Kshatriya Kalyana Mandapam, Amalapuram');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
};
