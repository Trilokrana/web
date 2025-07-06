import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Copy,
    Download,
    ExternalLink,
    MapPin,
    Calendar,
    Users,
    Building2,
    Globe,
    Target,
    Award,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 flex items-center justify-center">
            <div className="w-full max-w-5xl">
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg font-bold tracking-tight">Company Profile</h1>
                            <div className="flex gap-2">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="gap-1 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 rounded-lg text-sm px-2 py-1"
                                >
                                    <Copy className="w-3 h-3" />
                                    Copy
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="gap-1 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 rounded-lg text-sm px-2 py-1"
                                >
                                    <Download className="w-3 h-3" />
                                    Export
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="w-16 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                Logo
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-1">Siemens</h2>
                                <p className="text-slate-300 flex items-center gap-1 text-sm">
                                    <MapPin className="w-3 h-3" />
                                    Wolfsburg, Germany
                                </p>
                            </div>
                        </div>
                    </CardHeader>
                    <div className="bg-white border-b border-slate-200">
                        <div className="flex">
                            <div className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <span className="font-semibold text-sm">Overview</span>
                            </div>
                            <div className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <span className="font-medium text-sm">Financials</span>
                            </div>
                            <div className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <span className="font-medium text-sm">Market</span>
                            </div>
                            <div className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                                <span className="font-medium text-sm">Latest News</span>
                            </div>
                        </div>
                    </div>
                    <CardContent className="p-2">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-8">
                                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-2 shadow-sm border border-slate-100 h-full">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-slate-900">Key Facts</h3>
                                        <Badge className="rounded-full w-6 h-6 p-0 flex items-center justify-center text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg border-0">
                                            1
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-2">
                                        {[
                                            { label: "Company Legal Name", value: "Siemens AG", icon: Building2 },
                                            { label: "Website", value: "siemens.com", isLink: true, icon: Globe },
                                            { label: "Headquarters", value: "Munich, Germany", icon: MapPin },
                                            { label: "Founded", value: "1847", icon: Calendar },
                                            { label: "Employees", value: "~311,000 (2024)", icon: Users },

                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 p-2 bg-white/80 rounded-lg hover:bg-white transition-all duration-300 group shadow-sm"
                                            >
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <item.icon className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{item.label}</p>
                                                    {item.isLink ? (
                                                        <Link
                                                            href={`https://${item.value}`}
                                                            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline transition-all duration-300 text-sm"
                                                        >
                                                            {item.value}
                                                            <ExternalLink className="w-2 h-2" />
                                                        </Link>
                                                    ) : (
                                                        <p className="text-slate-900 font-semibold text-sm">{item.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        <div className="p-2 bg-white/80 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-1 mb-1">
                                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                    <Target className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Sector</span>
                                            </div>
                                            <p className="text-slate-900 font-semibold text-sm">
                                                Industrial Conglomerate / Technology / Engineering
                                            </p>
                                        </div>
                                        <div className="p-2 bg-white/80 rounded-lg shadow-sm">
                                            <div className="flex items-center gap-1 mb-1">
                                                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                                    <Award className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                                                    Business Model
                                                </span>
                                            </div>
                                            <p className="text-slate-900 font-semibold text-sm">
                                                B2B – Industrial automation, infrastructure, healthcare technology, energy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 shadow-sm border border-slate-100 h-full">
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-lg font-bold text-slate-900">Summary</h3>
                                        <Badge className="rounded-full w-6 h-6 p-0 flex items-center justify-center text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg border-0">
                                            2
                                        </Badge>
                                    </div>
                                    <div className="bg-white/80 rounded-lg p-3 shadow-sm">
                                        <p className="text-slate-700 leading-relaxed font-medium text-sm mb-2">
                                            Siemens AG is a global powerhouse focusing on electrification, automation, and digitalization.
                                        </p>
                                        <p className="text-slate-700 leading-relaxed font-medium text-sm mb-2">
                                            The company offers products, systems, solutions, and services for industries, infrastructure,
                                            transportation, and healthcare.
                                        </p>
                                        <p className="text-slate-700 leading-relaxed font-medium text-sm">
                                            Siemens drives innovation in smart infrastructure, energy-efficient technologies, and industry
                                            software.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
