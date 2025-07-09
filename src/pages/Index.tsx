
import { Link } from 'react-router-dom';
import { Shield, Target, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-cyber-blue">SecureTech</h1>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/cybersecurity" className="text-gray-700 hover:text-cyber-blue transition-colors">
                Cybersecurity
              </Link>
              <Link to="/ctf" className="text-gray-700 hover:text-cyber-blue transition-colors">
                CTF Platform
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Securing Your
            <span className="text-cyber-blue block">Digital Future</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading cybersecurity solutions and training platforms for enterprises and enthusiasts. 
            Protect, learn, and compete in the world of digital security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyber-blue hover:bg-cyber-blue/90">
              <Link to="/cybersecurity">
                Our Security Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/ctf">
                Join CTF Competition
                <Target className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Platforms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions and hands-on learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link to="/cybersecurity">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyber-blue/20 transition-colors">
                    <Shield className="h-8 w-8 text-cyber-blue" />
                  </div>
                  <CardTitle className="text-2xl">Cybersecurity Services</CardTitle>
                  <CardDescription>
                    Enterprise-grade security solutions and best practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced threat protection</li>
                    <li>• Security audits and assessments</li>
                    <li>• Employee training programs</li>
                    <li>• 24/7 monitoring and support</li>
                  </ul>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <Link to="/ctf">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Target className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-2xl">CTF Platform</CardTitle>
                  <CardDescription>
                    Capture The Flag competitions for security enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time leaderboards</li>
                    <li>• Diverse challenge categories</li>
                    <li>• Skill-based competitions</li>
                    <li>• Community-driven learning</li>
                  </ul>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">SecureTech</h3>
          <p className="text-gray-400">
            Your trusted partner in cybersecurity solutions and training
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
