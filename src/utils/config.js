import configData from '../../wedding-config.json';

/**
 * Extracts a standard 11-character YouTube video ID from various URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/live/VIDEO_ID
 * - Bare 11-character ID (VIDEO_ID)
 */
export function getYouTubeId(urlOrId) {
  if (!urlOrId) return '';
  const str = String(urlOrId).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|live\/))([\w-]{11})/i);
  return match ? match[1] : str;
}

export function getYouTubeWatchUrl(urlOrId) {
  const id = getYouTubeId(urlOrId);
  return id ? `https://www.youtube.com/watch?v=${id}` : '';
}

export function getYouTubeEmbedUrl(urlOrId, params = '') {
  const id = getYouTubeId(urlOrId);
  return id ? `https://www.youtube.com/embed/${id}${params ? `?${params}` : ''}` : '';
}

export const weddingConfig = {
  couple: configData.couple || {
    groom: 'Vivek',
    bride: 'Varshini',
    hashtag: '#VivekWedsVarshini',
  },
  wedding: configData.wedding || {
    date: '19 December 2026',
    time: '03:35 AM IST',
    venue: 'Kshatriya Kalyana Mandapam, Amalapuram',
    mapUrl: 'https://www.google.com/maps/place/Kshatriya+Kalyana+Mandapam/@16.5607114,81.993831,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37e583a8300001:0xa14bf2c729820592!8m2!3d16.5607114!4d81.993831!16s%2Fg%2F11sskr8sqc!5m1!1e2!18m1!1e1?entry=ttu',
  },
  liveWeddingStreamUrl: configData.liveWeddingStreamUrl || 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
  preWeddingVideoUrl: configData.preWeddingVideoUrl || 'https://www.youtube.com/watch?v=tVT4vd4Mj1Q',
  backgroundMusicUrl: configData.backgroundMusicUrl || 'https://www.youtube.com/watch?v=m-RiOAOfCGs',
};

export default weddingConfig;
