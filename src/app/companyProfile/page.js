import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Download } from "lucide-react";
import Link from "next/link";

export default function Component() {
    return (
        <div className="">
            <Card className="max-w-4xl mx-auto min-h-screen border-2 border-black my-20 rounded-xl">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between not-first-of-type:mx-4">
                        <h1 className="text-2xl font-bold text-gray-900 ">
                            Company Profile
                        </h1>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 bg-transparent"
                            >
                                <Copy className="w-4 h-4" />
                                Copy
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 bg-transparent"
                            >
                                <Download className="w-4 h-4" />
                                Export ppt
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div className="w-22 h-15 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            Logo
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Siemens</h2>
                            <p className="text-gray-700">Wolfsburg, Germany</p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="border-t border-black ">
                        <div className="flex border-b border-black">
                            <div className="flex-1 px-6 py-3 border-r border-black bg-white">
                                <span className="font-medium text-gray-700 ">Overview</span>
                            </div>
                            <div className="flex-1 px-6 py-3 border-r border-black bg-gray-50">
                                <span className="font-medium text-gray-700">Financials</span>
                            </div>
                            <div className="flex-1 px-6 py-3 border-r border-black bg-gray-50">
                                <span className="font-medium text-gray-700">Market</span>
                            </div>
                            <div className="flex-1 px-6 py-3 bg-gray-50">
                                <span className="font-medium text-gray-700">Latest News</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Key Facts</h3>
                                <Badge
                                    variant="secondary"
                                    className="rounded w-7 h-7 p-0 flex items-center justify-center text-sm bg-gray-200 text-gray-700 border-2 border-black"
                                >
                                    1
                                </Badge>
                            </div>

                            <div className="grid gap-2 text-md">
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">
                                        Company Legal name:
                                    </span>
                                    <span className="text-gray-700 font-semibold">
                                        Siemens AG
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44 ">
                                        Website:
                                    </span>
                                    <Link
                                        href="https://siemens.com"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        siemens.com
                                    </Link>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">
                                        Headquarters:
                                    </span>
                                    <span className="text-gray-700 font-semibold">
                                        Munich, Germany
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">Founded:</span>
                                    <span className="text-gray-700 font-semibold">1847</span>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">
                                        Employees:
                                    </span>
                                    <span className="text-gray-700 font-semibold">
                                        ~311,000 (2024)
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">Sector:</span>
                                    <span className="text-gray-700 font-semibold">
                                        Industrial Conglomerate / Technology / Engineering
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="font-bold text-gray-900 w-44">
                                        Business Model:
                                    </span>
                                    <span className="text-gray-700 font-semibold">
                                        B2B – Industrial automation, infrastructure, healthcare
                                        technology, energy
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-xl font-bold text-gray-900 underline">
                                    Summary
                                </h3>
                                <Badge
                                    variant="secondary"
                                    className="rounded w-7 h-7 p-0 flex items-center justify-center text-sm bg-gray-200 text-gray-700 border-2 border-black "
                                >
                                    2
                                </Badge>
                            </div>

                            <p className="text-gray-700 leading-relaxed font-semibold">
                                Siemens AG is a global powerhouse focusing on electrification,
                                automation, and digitalization. The company offers products,
                                systems, solutions, and services for industries, infrastructure,
                                transportation, and healthcare. Siemens drives innovation in
                                smart infrastructure, energy-efficient technologies, and
                                industry software.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
