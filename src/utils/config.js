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
  liveWeddingStreamUrl: configData.liveWeddingStreamUrl || 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
  preWeddingVideoUrl: configData.preWeddingVideoUrl || 'https://www.youtube.com/watch?v=tVT4vd4Mj1Q',
  backgroundMusicUrl: configData.backgroundMusicUrl || 'https://www.youtube.com/watch?v=m-RiOAOfCGs',
};

export default weddingConfig;
