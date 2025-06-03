
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, DollarSign, Rocket, Target, Award, Building, Lightbulb } from "lucide-react";

const StatsSection = () => {
  // Sample data for charts
  const growthData = [
    { month: "Jan", startups: 12, revenue: 45000 },
    { month: "Feb", startups: 18, revenue: 67000 },
    { month: "Mar", startups: 25, revenue: 89000 },
    { month: "Apr", startups: 32, revenue: 112000 },
    { month: "May", startups: 41, revenue: 145000 },
    { month: "Jun", startups: 48, revenue: 178000 },
  ];

  const fundingData = [
    { stage: "Pre-Seed", amount: 125, count: 35 },
    { stage: "Seed", amount: 450, count: 28 },
    { stage: "Series A", amount: 850, count: 15 },
    { stage: "Series B", amount: 1200, count: 8 },
  ];

  const sectorData = [
    { name: "FinTech", value: 28, color: "#3B82F6" },
    { name: "HealthTech", value: 22, color: "#10B981" },
    { name: "EdTech", value: 18, color: "#F59E0B" },
    { name: "AI/ML", value: 16, color: "#8B5CF6" },
    { name: "Others", value: 16, color: "#EF4444" },
  ];

  const engagementData = [
    { month: "Jan", applications: 145, accepted: 12, mentoring: 89 },
    { month: "Feb", applications: 167, accepted: 18, mentoring: 102 },
    { month: "Mar", applications: 189, accepted: 25, mentoring: 118 },
    { month: "Apr", applications: 212, accepted: 32, mentoring: 134 },
    { month: "May", applications: 234, accepted: 41, mentoring: 156 },
    { month: "Jun", applications: 267, accepted: 48, mentoring: 178 },
  ];

  const kpis = [
    {
      title: "Active Startups",
      value: "48",
      change: "+12%",
      trend: "up",
      icon: Rocket,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Funding Raised",
      value: "$2.6M",
      change: "+28%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Successful Exits",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Industry Partners",
      value: "35+",
      change: "+8",
      trend: "up",
      icon: Building,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Mentors Network",
      value: "120+",
      change: "+15",
      trend: "up",
      icon: Users,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      title: "Innovation Score",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const chartConfig = {
    startups: {
      label: "Startups",
      color: "#3B82F6",
    },
    revenue: {
      label: "Revenue ($)",
      color: "#10B981",
    },
    applications: {
      label: "Applications",
      color: "#8B5CF6",
    },
    accepted: {
      label: "Accepted",
      color: "#F59E0B",
    },
    mentoring: {
      label: "Mentoring Sessions",
      color: "#EF4444",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 font-medium">
            📊 Our Impact & Growth
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Driving Innovation with 
            <span className="text-gradient"> Measurable Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our data-driven approach to startup incubation delivers consistent growth, 
            successful exits, and meaningful impact across the innovation ecosystem.
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={index} className="stats-card border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                      <IconComponent className={`h-5 w-5 ${kpi.color}`} />
                    </div>
                    <div className="flex items-center text-sm font-medium text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {kpi.change}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Growth Trajectory */}
          <Card className="chart-container border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-gray-900 flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                Growth Trajectory
              </CardTitle>
              <p className="text-gray-600">Startups incubated and revenue generated over time</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-gray-500" />
                    <YAxis axisLine={false} tickLine={false} className="text-gray-500" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="startups"
                      stackId="1"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.3}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="2"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Funding Distribution */}
          <Card className="chart-container border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-gray-900 flex items-center">
                <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                Funding by Stage
              </CardTitle>
              <p className="text-gray-600">Investment distribution across funding stages</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fundingData}>
                    <XAxis dataKey="stage" axisLine={false} tickLine={false} className="text-gray-500" />
                    <YAxis axisLine={false} tickLine={false} className="text-gray-500" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="amount" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sector Distribution */}
          <Card className="chart-container border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-gray-900 flex items-center">
                <Target className="h-6 w-6 text-purple-600 mr-3" />
                Sector Distribution
              </CardTitle>
              <p className="text-gray-600">Startup distribution by industry sector</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {sectorData.map((sector, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: sector.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{sector.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement Metrics */}
          <Card className="chart-container border-0 shadow-lg lg:col-span-2">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-gray-900 flex items-center">
                <Users className="h-6 w-6 text-teal-600 mr-3" />
                Engagement & Pipeline
              </CardTitle>
              <p className="text-gray-600">Application pipeline and mentoring activity trends</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-gray-500" />
                    <YAxis axisLine={false} tickLine={false} className="text-gray-500" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="applications"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="accepted"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mentoring"
                      stroke="#EF4444"
                      strokeWidth={3}
                      dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
