import { useEffect, useState } from "react";
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getMonth,
  startOfMonth,
} from "date-fns";
import { CalendarHeader } from "../organisms/CalendarHeader";
import { CalendarBody } from "../organisms/CalendarBody";

export const CalendarPage = () => {
  const today = new Date();
  const [dateList, setDateList] = useState<Date[][]>([]);

  useEffect(() => {
    // 期間内の週開始日(日曜日)のみを含む配列
    const monthOfSundayList = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    });
    // 1ヶ月分の2次元配列の作成
    const newDateList: Date[][] = monthOfSundayList.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      });
    });
    setDateList(newDateList);
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
        <CalendarHeader />
        <CalendarBody currentDate={today} dateList={dateList} />
      </table>
    </>
  );
};
