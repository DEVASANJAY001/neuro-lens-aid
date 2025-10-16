import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  RefreshCw, 
  Smile, 
  Meh, 
  Frown,
  Activity,
  Zap,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [inputText, setInputText] = useState("");
  const [summaryLength, setSummaryLength] = useState([50]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState("");
  const [sentiment, setSentiment] = useState<"positive" | "neutral" | "negative" | null>(null);
  const [emotionalState, setEmotionalState] = useState({
    stress: 20,
    focus: 75,
    engagement: 60
  });

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to summarize",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const summary = `${inputText.slice(0, Math.floor(inputText.length * summaryLength[0] / 100))}...`;
      setResult(summary);
      
      // Simulate sentiment analysis
      const randomSentiment = Math.random();
      if (randomSentiment > 0.6) setSentiment("positive");
      else if (randomSentiment > 0.3) setSentiment("neutral");
      else setSentiment("negative");
      
      setIsProcessing(false);
      
      toast({
        title: "Processing complete",
        description: "Your text has been analyzed and summarized",
      });
    }, 2000);
  };

  const getSentimentIcon = () => {
    switch (sentiment) {
      case "positive": return <Smile className="h-5 w-5 text-secondary" />;
      case "neutral": return <Meh className="h-5 w-5 text-muted-foreground" />;
      case "negative": return <Frown className="h-5 w-5 text-destructive" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Interactive AI Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Experience emotion-aware text processing and mindful content summarization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Emotional State Cards */}
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-destructive" />
                  <h3 className="font-semibold">Stress Level</h3>
                </div>
                <Badge variant="outline" className="border-destructive/30">
                  {emotionalState.stress}%
                </Badge>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-destructive transition-all duration-1000"
                  style={{ width: `${emotionalState.stress}%` }}
                />
              </div>
            </Card>

            <Card className="p-6 glass border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Focus</h3>
                </div>
                <Badge variant="outline" className="border-primary/30">
                  {emotionalState.focus}%
                </Badge>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-1000"
                  style={{ width: `${emotionalState.focus}%` }}
                />
              </div>
            </Card>

            <Card className="p-6 glass border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold">Engagement</h3>
                </div>
                <Badge variant="outline" className="border-secondary/30">
                  {emotionalState.engagement}%
                </Badge>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-1000"
                  style={{ width: `${emotionalState.engagement}%` }}
                />
              </div>
            </Card>
          </div>

          {/* Main Processing Area */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Input Text</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="input-text">Enter content to analyze</Label>
                  <Textarea
                    id="input-text"
                    placeholder="Paste your article, email, or any text content here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="min-h-[200px] mt-2 bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <Label htmlFor="summary-length">
                    Summary Length: {summaryLength[0]}%
                  </Label>
                  <Slider
                    id="summary-length"
                    value={summaryLength}
                    onValueChange={setSummaryLength}
                    min={10}
                    max={90}
                    step={10}
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={handleSummarize}
                  disabled={isProcessing}
                  variant="hero"
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Analyze & Summarize
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Section */}
            <Card className="p-6 glass border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  <h2 className="text-xl font-semibold">AI-Processed Output</h2>
                </div>
                {sentiment && (
                  <div className="flex items-center gap-2">
                    {getSentimentIcon()}
                    <Badge variant="outline" className="capitalize">
                      {sentiment}
                    </Badge>
                  </div>
                )}
              </div>

              {result ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border/50 min-h-[200px]">
                    <p className="text-foreground leading-relaxed">{result}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Adjust Tone
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Translate
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Proofread
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[200px] border-2 border-dashed border-border/30 rounded-lg">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-3 neural-pulse" />
                    <p className="text-muted-foreground">
                      Your processed content will appear here
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Feature Info */}
          <Card className="mt-6 p-6 glass border-border/50">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">1. Emotion Detection:</span> Analyzes your emotional state through engagement patterns
              </div>
              <div>
                <span className="font-semibold text-foreground">2. Smart Summarization:</span> Condenses content based on your cognitive load
              </div>
              <div>
                <span className="font-semibold text-foreground">3. Adaptive Response:</span> Adjusts tone and complexity to match your needs
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
