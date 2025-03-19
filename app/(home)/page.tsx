import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { format, isMatch } from "date-fns";

interface HomeProps {
  searchParams: { month: string; year: string };
}

async function Home({ searchParams: { month, year } }: HomeProps) {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  const yearIsInvalid = !year || !isMatch(year, "yyyy");

  if (monthIsInvalid || yearIsInvalid) {
    redirect(
      `?month=${format(new Date(), "MM")}&year=${format(new Date(), "yyyy")}`,
    );
  }

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <SummaryCards month={month} year={year} />
      </div>
    </>
  );
}

export default Home;
