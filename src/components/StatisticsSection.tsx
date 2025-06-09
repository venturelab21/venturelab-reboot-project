
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Building2, Rocket } from "lucide-react";

const StatisticsSection = () => {
  // Sample data for charts
  const monthlyGrowthData = [
    { month: "Jan", startups: 12, funding: 2.5, users: 850 },
    { month: "Feb", startups: 18, funding: 3.8, users: 1200 },
    { month: "Mar", startups: 25, funding: 5.2, users: 1800 },
    { month: "Apr", startups: 32, funding: 7.1, users: 2400 },
    { month: "May", startups: 41, funding: 9.8, users: 3200 },
    { month: "Jun", startups: 52, funding: 12.5, users: 4100 },
  ];

  const sectorDistribution = [
    { name: "FinTech", value: 35, color: "#3B82F6" },
    { name: "Healthcare", value: 25, color: "#EC4899" },
    { name: "B2B SaaS", value: 20, color: "#8B5CF6" },
    { name: "Consumer Internet", value: 15, color: "#10B981" },
    { name: "Deep Tech", value: 5, color: "#F59E0B" },
  ];

  const chartConfig = {
    startups: {
      label: "Startups",
      color: "#3B82F6",
    },
    funding: {
      label: "Funding (₹Cr)",
      color: "#10B981",
    },
    users: {
      label: "Active Users",
      color: "#EC4899",
    },
  };

  const kpiCards = [
    {
      title: "Portfolio Companies",
      value: "52",
      change: "+23%",
      trend: "up",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Active startups in our portfolio"
    },
    {
      title: "Total Funding Raised",
      value: "₹78.5Cr",
      change: "+45%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Cumulative funding by portfolio companies"
    },
    {
      title: "Jobs Created",
      value: "1,240",
      change: "+32%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Employment opportunities generated"
    },
    {
      title: "Success Rate",
      value: "78%",
      change: "+12%",
      trend: "up",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Companies achieving milestones"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="statistics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">Portfolio Performance</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight">
            Driving <span className="text-blue-600">Innovation</span> Forward
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Our portfolio companies are scaling rapidly, creating jobs, and transforming industries across India.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpiCards.map((kpi, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${kpi.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <div className={`text-sm font-semibold px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {kpi.change}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-black text-gray-900 tracking-tight">{kpi.value}</p>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">{kpi.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{kpi.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Monthly Growth Chart */}
          <Card className="shadow-xl border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-black text-gray-900 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-blue-600" />
                Monthly Growth Trajectory
              </CardTitle>
              <p className="text-sm text-gray-600 font-medium">Startups, funding, and user growth over time</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fontWeight: 600 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fontWeight: 600 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="startups" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="funding" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Sector Distribution */}
          <Card className="shadow-xl border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-black text-gray-900 flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Sector Distribution
              </CardTitle>
              <p className="text-sm text-gray-600 font-medium">Portfolio allocation across key sectors</p>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sectorDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 rounded-lg shadow-lg border">
                              <p className="font-semibold text-gray-900">{data.name}</p>
                              <p className="text-sm text-gray-600">{data.value}% of portfolio</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {sectorDistribution.map((sector, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: sector.color }}
                    ></div>
                    <span className="text-xs font-semibold text-gray-700">{sector.name}</span>
                    <span className="text-xs text-gray-500 ml-auto">{sector.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ready to Join Our Portfolio?
            </h3>
            <p className="text-lg mb-6 opacity-90 font-medium">
              Be part of the next wave of successful startups transforming industries.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
