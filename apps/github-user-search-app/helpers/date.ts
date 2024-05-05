import dateFormat from "dateformat";

export const convertToJoinedAt = (date: string) => {
  const res = dateFormat(date, "dd mmm yyyy");
  return "Joined at " + res;
};
