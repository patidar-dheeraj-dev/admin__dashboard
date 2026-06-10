import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-blue-600 text-white py-12">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-4xl font-bold">About Dashboard</h1>
                    <p className="mt-3 text-blue-100">
                        Learn how the dashboard helps you manage and monitor your data
                        efficiently.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-10">
                {/* What is Dashboard */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        What is this Dashboard?
                    </h2>

                    <p className="text-gray-600 leading-7">
                        This dashboard is a centralized platform that displays important
                        information, statistics, and activities in one place. It helps users
                        quickly understand data, monitor performance, and make informed
                        decisions without navigating through multiple pages.
                    </p>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        How It Works
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold">1. Data Collection</h3>
                            <p className="text-gray-600">
                                The system gathers information from connected sources and
                                stores it securely.
                            </p>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold">2. Data Processing</h3>
                            <p className="text-gray-600">
                                Information is analyzed and organized into meaningful reports
                                and metrics.
                            </p>
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold">3. Visualization</h3>
                            <p className="text-gray-600">
                                Data is displayed through tables, charts, summaries, and
                                activity logs for easy understanding.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Use */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Why Use This Dashboard?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-700 mb-2">
                                Save Time
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Access all important information from a single location.
                            </p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-700 mb-2">
                                Better Decisions
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Use real-time insights and reports to make informed choices.
                            </p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-purple-700 mb-2">
                                Easy Monitoring
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Track performance, trends, and activities effortlessly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Key Features
                    </h2>

                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Real-time data tracking</li>
                        <li>User-friendly interface</li>
                        <li>Detailed reports and analytics</li>
                        <li>Secure data management</li>
                        <li>Responsive design for all devices</li>
                    </ul>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;