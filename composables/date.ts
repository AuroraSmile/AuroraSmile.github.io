import { useDateFormat, UseDateFormatOptions } from "@vueuse/core";

export const formatDate = (
  date: string,
  format: string,
  option?: UseDateFormatOptions
) => {
  return useDateFormat(date, format, option).value;
};
