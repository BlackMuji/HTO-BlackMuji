/**
 * Formats a date string into "YYYY-MM-DD HH:mm" format.
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 * @throws Will throw an error if the provided date string is invalid.
 */
export const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string provided.');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

export const formatRemainingTime = (endDateString: string | Date): string => {
  const now = new Date(); // 현재 시간
  const endDate = new Date(endDateString);

  if (isNaN(endDate.getTime())) {
    throw new Error('Invalid end date string provided.');
  }

  const diff = endDate.getTime() - now.getTime(); // 남은 시간(ms 단위)

  if (diff <= 0) {
    return "Time's up!"; // 시간이 만료된 경우
  }

  const hours = Math.floor(diff / (1000 * 60 * 60)); // 남은 시간(시)
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // 남은 시간(분)

  return `남은 시간: ${hours}시간 ${minutes}분`;
};