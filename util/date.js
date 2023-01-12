export const getKoreanDate = (
  date,
  options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    weekday: "short",
  },
) => {
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const getDateOnly = (
  date,
  options = {
    month: "short",
    day: "numeric",
    weekday: "short",
  },
) => {
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const getTimeOnly = (
  date,
  options = {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  },
) => {
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const getSlot = (date) => {
  if (6 <= date.getHours() && date.getHours() < 12) return "아침";
  if (13 <= date.getHours() && date.getHours() < 18) return "오후";
  return "저녁";
};
