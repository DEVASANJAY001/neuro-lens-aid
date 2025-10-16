import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Sparkles,
  Shield,
  Zap,
  Activity,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle2,
  Eye,
  Mic,
  FileText,
  Languages,
  Palette
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Eye,
      title: "Facial Expression Analysis",
      description: "Real-time emotion detection through micro-expression analysis using your camera",
      color: "text-primary"
    },
    {
      icon: Mic,
      title: "Voice Tone Detection",
      description: "Analyze emotional states through voice modulation and acoustic patterns",
      color: "text-secondary"
    },
    {
      icon: FileText,
      title: "Smart Summarization",
      description: "AI-powered content condensation based on your cognitive load and focus level",
      color: "text-accent"
    },
    {
      icon: Palette,
      title: "Tone Adjustment",
      description: "Transform negative sentiment into neutral, empathetic phrasing automatically",
      color: "text-primary"
    },
    {
      icon: Languages,
      title: "Instant Translation",
      description: "Break language barriers with seamless cross-cultural understanding",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Mindfulness Interventions",
      description: "Detect stress and offer mental reset recommendations for better wellbeing",
      color: "text-accent"
    }
  ];

  const stats = [
    { value: "100%", label: "Privacy-First" },
    { value: "0ms", label: "Cloud Latency" },
    { value: "24/7", label: "Active Protection" },
    { value: "∞", label: "Offline Capable" }
  ];

  const useCases = [
    {
      title: "Information Overload",
      description: "Automatically summarize lengthy articles when stress is detected",
      icon: Activity
    },
    {
      title: "Toxic Content Filter",
      description: "Transform negative online communication into constructive dialogue",
      icon: Shield
    },
    {
      title: "Focus Enhancement",
      description: "Adapt content complexity based on your current cognitive capacity",
      icon: Zap
    },
    {
      title: "Mental Wellness",
      description: "Prevent digital burnout with mindful browsing recommendations",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-glow opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20" variant="outline">
              <Sparkles className="h-3 w-3 mr-1" />
              Chrome Extension with Gemini Nano AI
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">NeuroLens</span>
              <br />
              <span className="text-foreground">Emotion-Aware Browsing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your web experience with AI-powered emotional intelligence. 
              Real-time emotion detection, mindful summarization, and privacy-first design 
              to protect your mental wellbeing while browsing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/dashboard">
                  Try Live Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/developer">
                  Developer Portal
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Multimodal AI <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by Chrome's Gemini Nano, running entirely on your device
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 glass border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="mb-4 relative">
                  <div className={`inline-flex p-3 rounded-lg bg-background/50 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-World <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solving digital wellness challenges for millions of users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="p-8 glass border-border/50">
                <useCase.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Technology Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto p-12 glass border-border/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Shield className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Privacy-First <span className="gradient-text">Architecture</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">100% on-device AI processing with Gemini Nano</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Zero data transmission to external servers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Local emotion and sentiment analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">Full user control over all features</p>
                  </div>
                </div>
              </div>

              <div>
                <Brain className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  Advanced <span className="gradient-text">AI Stack</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Prompt API</p>
                      <p className="text-sm text-muted-foreground">Multimodal query orchestration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Summarizer API</p>
                      <p className="text-sm text-muted-foreground">Cognitive load-aware compression</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Writer/Rewriter APIs</p>
                      <p className="text-sm text-muted-foreground">Tone and sentiment adjustment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Translator API</p>
                      <p className="text-sm text-muted-foreground">Multilingual comprehension</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center glass border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-30" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Transform Your <span className="gradient-text">Browsing?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the future of emotion-aware, mindful web browsing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/dashboard">
                    <Sparkles className="h-5 w-5" />
                    Try Interactive Demo
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/developer">
                    <Brain className="h-5 w-5" />
                    Explore API
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold gradient-text">NeuroLens</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powered by Chrome's Gemini Nano • Built for the Chrome Challenge
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
