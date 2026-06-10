export default function Report() {
    const reports = [
        {
            id: 1,
            title: "Monthly Sales",
            date: "10 Jun 2026",
            status: "Completed",
            amount: "$12,500",
        },
        {
            id: 2,
            title: "Customer Analysis",
            date: "08 Jun 2026",
            status: "Pending",
            amount: "$8,200",
        },
        {
            id: 3,
            title: "Revenue Report",
            date: "05 Jun 2026",
            status: "Completed",
            amount: "$15,700",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Reports Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    View and manage all generated reports.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-500 text-sm">Total Reports</h3>
                    <p className="text-3xl font-bold mt-2">120</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-500 text-sm">Completed</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">98</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-gray-500 text-sm">Pending</h3>
                    <p className="text-3xl font-bold text-orange-500 mt-2">22</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    Report Overview
                </h2>

                <p className="text-gray-600 leading-7">
                    This section provides a summary of report activities,
                    performance metrics, and generated insights. Reports help
                    users monitor business growth, identify trends, and make
                    data-driven decisions.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">
                        Recent Reports
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-left">
                                <th className="px-6 py-4">Report Name</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {reports.map((report) => (
                                <tr
                                    key={report.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 font-medium">
                                        {report.title}
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        {report.date}
                                    </td>

                                    <td className="px-6 py-4">
                                        {report.amount}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${report.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-orange-100 text-orange-700"
                                                }`}
                                        >
                                            {report.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                    Generate Report
                </button>

                <button className="bg-white border px-5 py-2 rounded-lg hover:bg-gray-50">
                    Export Data
                </button>
            </div>
        </div>
    );
}