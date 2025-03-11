import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionsColumns } from "./_columns";
import AddTransactionsButton from "../_components/add-transations-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function TransactionsPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>

          <AddTransactionsButton />
        </div>

        <DataTable
          columns={TransactionsColumns}
          data={JSON.parse(JSON.stringify(transactions))}
        />
      </div>
    </>
  );
}
export default TransactionsPage;
