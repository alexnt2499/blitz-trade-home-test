import CardItem from "@/components/CardItem";
import Spinner from "@/components/Spinner";
import { exportFileName } from "@/configs";
import { useGlobalData } from "@/context/GlobalDataContext";
import { formatExportData } from "@/utils/formatExportData";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { CSVLink } from "react-csv";

export default function Home() {
  const { listInfoAddress, isLoading } = useGlobalData();

  return (
    <main className="flex flex-col items-center justify-start p-16">
      <h1 className="text-4xl font-mono">Wallets checking</h1>
      <div className="mt-6 w-full max-w-3xl flex justify-end">
        {isLoading ? (
          <div className="py-2 w-[100px] rounded-sm text-black transition-all duration-300 flex cursor-not-allowed bg-gray-600 justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <CSVLink
            data={formatExportData(listInfoAddress)}
            className="py-2 px-2  rounded-sm text-black transition-all duration-300 flex cursor-pointer bg-white hover:bg-opacity-70"
            filename={exportFileName}
          >
            <DocumentArrowDownIcon className="w-6 h-6 mr-2" />
            <p>Export CSV</p>
          </CSVLink>
        )}
      </div>
      <div className="mt-6 w-full max-w-3xl">
        {isLoading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
        {!isLoading &&
          listInfoAddress.map((item) => {
            return <CardItem key={item.address} item={item} />;
          })}
      </div>
    </main>
  );
}
