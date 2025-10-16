import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Activity,
  Settings,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Developer = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");
  const [testEndpoint, setTestEndpoint] = useState("/api/summarize");

  const handleApiTest = () => {
    toast({
      title: "API Test Successful",
      description: "Connection established and authenticated",
    });
  };

  const stats = [
    { label: "Total Requests", value: "124.5K", change: "+12.3%", icon: Activity, color: "text-primary" },
    { label: "Active Users", value: "2,847", change: "+8.1%", icon: Users, color: "text-secondary" },
    { label: "Avg Response Time", value: "142ms", change: "-5.2%", icon: Zap, color: "text-accent" },
    { label: "Success Rate", value: "99.8%", change: "+0.2%", icon: TrendingUp, color: "text-primary" },
  ];

  const recentActivity = [
    { endpoint: "/api/summarize", status: "success", time: "2m ago", responseTime: "134ms" },
    { endpoint: "/api/sentiment", status: "success", time: "5m ago", responseTime: "98ms" },
    { endpoint: "/api/translate", status: "success", time: "8m ago", responseTime: "156ms" },
    { endpoint: "/api/rewrite", status: "error", time: "12m ago", responseTime: "timeout" },
    { endpoint: "/api/summarize", status: "success", time: "15m ago", responseTime: "121ms" },
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Developer Portal
            </h1>
            <p className="text-muted-foreground text-lg">
              Monitor, test, and configure your NeuroLens AI integration
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 glass border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <Badge 
                    variant="outline" 
                    className={stat.change.startsWith('+') ? 'border-secondary/30 text-secondary' : 'border-destructive/30 text-destructive'}
                  >
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - API Testing & Config */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="glass border-border/50">
                <Tabs defaultValue="test" className="w-full">
                  <div className="border-b border-border/50 px-6 pt-6">
                    <TabsList className="bg-muted/50">
                      <TabsTrigger value="test" className="data-[state=active]:bg-primary/20">
                        <Code2 className="h-4 w-4 mr-2" />
                        API Testing
                      </TabsTrigger>
                      <TabsTrigger value="config" className="data-[state=active]:bg-primary/20">
                        <Settings className="h-4 w-4 mr-2" />
                        Configuration
                      </TabsTrigger>
                      <TabsTrigger value="analytics" className="data-[state=active]:bg-primary/20">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Analytics
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="test" className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="api-key">API Key</Label>
                      <Input
                        id="api-key"
                        type="password"
                        placeholder="Enter your API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="mt-2 bg-background/50 border-border/50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="endpoint">Test Endpoint</Label>
                      <Input
                        id="endpoint"
                        placeholder="/api/summarize"
                        value={testEndpoint}
                        onChange={(e) => setTestEndpoint(e.target.value)}
                        className="mt-2 bg-background/50 border-border/50"
                      />
                    </div>

                    <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                      <p className="text-sm font-mono text-muted-foreground mb-2">Request Example:</p>
                      <pre className="text-xs overflow-x-auto">
{`{
  "text": "Your content here",
  "options": {
    "length": "medium",
    "sentiment": "neutral"
  }
}`}
                      </pre>
                    </div>

                    <Button onClick={handleApiTest} variant="hero" className="w-full">
                      <Zap className="h-4 w-4" />
                      Test API Connection
                    </Button>
                  </TabsContent>

                  <TabsContent value="config" className="p-6 space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                        <div>
                          <p className="font-semibold">Emotion Detection</p>
                          <p className="text-sm text-muted-foreground">Enable facial and voice analysis</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-secondary/30 text-secondary">Active</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                        <div>
                          <p className="font-semibold">Auto-Summarization</p>
                          <p className="text-sm text-muted-foreground">Automatically condense long content</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-secondary/30 text-secondary">Active</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                        <div>
                          <p className="font-semibold">Privacy Mode</p>
                          <p className="text-sm text-muted-foreground">All processing happens locally</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-primary/30 text-primary">Enabled</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                        <div>
                          <p className="font-semibold">Mindfulness Alerts</p>
                          <p className="text-sm text-muted-foreground">Notify on stress detection</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-secondary/30 text-secondary">Active</Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="analytics" className="p-6">
                    <div className="space-y-4">
                      <div className="h-64 flex items-center justify-center border-2 border-dashed border-border/30 rounded-lg">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                          <p className="text-muted-foreground">Analytics Dashboard</p>
                          <p className="text-sm text-muted-foreground">Visual charts coming soon</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Peak Usage</p>
                          <p className="text-2xl font-bold">2:00 PM - 4:00 PM</p>
                        </div>
                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Most Used API</p>
                          <p className="text-2xl font-bold">/summarize</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Right Column - Recent Activity */}
            <div className="space-y-6">
              <Card className="p-6 glass border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="p-3 bg-background/30 rounded-lg border border-border/30">
                      <div className="flex items-start justify-between mb-2">
                        <code className="text-xs text-primary">{activity.endpoint}</code>
                        {activity.status === "success" ? (
                          <CheckCircle2 className="h-4 w-4 text-secondary" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{activity.time}</span>
                        <span className={activity.status === "success" ? "text-secondary" : "text-destructive"}>
                          {activity.responseTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass border-border/50">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between">
                    API Documentation
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    GitHub Repository
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Chrome Web Store
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Community Discord
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Developer;
