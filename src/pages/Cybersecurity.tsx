
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Phone, Mail, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-cyber-blue hover:text-cyber-blue/80 transition-colors">
                SecureTech
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/cybersecurity" className="text-cyber-blue font-medium">
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
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-cyber-blue" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are committed to protecting your digital assets with industry-leading security practices, 
            comprehensive monitoring, and proactive threat prevention.
          </p>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Practices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive security measures designed to protect your business at every level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-cyber-blue" />
                </div>
                <CardTitle className="text-lg">Advanced Encryption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Military-grade AES-256 encryption for data at rest and in transit
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-cyber-blue" />
                </div>
                <CardTitle className="text-lg">24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Continuous threat detection and real-time security monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-cyber-blue" />
                </div>
                <CardTitle className="text-lg">Regular Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Quarterly security assessments and compliance audits
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-cyber-blue" />
                </div>
                <CardTitle className="text-lg">Employee Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive security awareness and best practices training
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Safety Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential security practices to keep you safe online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-cyber-blue" />
                  Password Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use unique, complex passwords for each account</li>
                  <li>• Enable two-factor authentication (2FA)</li>
                  <li>• Consider using a reputable password manager</li>
                  <li>• Regularly update your passwords</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Phishing Awareness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Verify sender authenticity before clicking links</li>
                  <li>• Be cautious of urgent or threatening messages</li>
                  <li>• Never share sensitive information via email</li>
                  <li>• Report suspicious emails to IT immediately</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Safe Browsing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Keep your browser and plugins updated</li>
                  <li>• Use HTTPS websites for sensitive transactions</li>
                  <li>• Avoid downloading software from untrusted sources</li>
                  <li>• Use ad blockers and anti-malware tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-purple-500" />
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regularly backup important data</li>
                  <li>• Use encryption for sensitive files</li>
                  <li>• Be mindful of what you share on social media</li>
                  <li>• Review privacy settings on all accounts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Security Concerns */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-red-900 mb-4">Report Security Concerns</h2>
            <p className="text-red-700 mb-6">
              If you notice any suspicious activity or potential security threats, 
              please report them immediately using one of the methods below:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: (555) 123-SECURITY
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                <Mail className="h-4 w-4 mr-2" />
                security@securetech.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Our Cybersecurity Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our expert security team is available to help with any questions or concerns
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-400">
                24/7 Emergency: (555) 123-SECURITY<br />
                Business Hours: (555) 123-4567
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-400">
                Security Issues: security@securetech.com<br />
                General Inquiries: info@securetech.com
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team</h3>
              <p className="text-gray-400">
                Certified security professionals<br />
                Available 24/7 for critical issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 SecureTech. All rights reserved. Protecting your digital future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cybersecurity;
