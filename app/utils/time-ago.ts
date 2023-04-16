export const timeAgo = (date: string) => {
  const seconds = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return {value:interval + ' yıl önce',time:6000000};
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return {value:interval + ' ay önce',time:6000000};
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return {value:interval + ' gün önce',time:6000000};
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return {value:interval + ' saat önce',time:6000000};
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return {value:interval + ' dakika önce', time:60000};
  }

  if (seconds < 10) return {value:'şimdi', time:10000}

  return {value:Math.floor(seconds) + ' saniye önce',time:10000};
};