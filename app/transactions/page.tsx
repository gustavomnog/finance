import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionsColumns } from "./_columns";
import AddTransactionsButton from "../_components/add-transations-button";

async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionsButton />
      </div>

      <DataTable columns={TransactionsColumns} data={transactions} />
    </div>
  );
}
export default TransactionsPage;
