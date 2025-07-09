
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Download, Clock, Users, Star, Flag, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CTF = () => {
  const [activeTab, setActiveTab] = useState('scoreboard');

  const leaderboard = [
    { rank: 1, team: 'CyberNinjas', score: 2850, members: 4 },
    { rank: 2, team: 'Binary Warriors', score: 2650, members: 3 },
    { rank: 3, team: 'Null Pointers', score: 2400, members: 5 },
    { rank: 4, team: 'Root Access', score: 2200, members: 4 },
    { rank: 5, team: 'Stack Overflow', score: 1980, members: 3 },
  ];

  const challenges = [
    { 
      id: 1, 
      title: 'SQL Injection Basics', 
      category: 'Web', 
      difficulty: 'Easy', 
      points: 100, 
      solved: 45,
      description: 'Find the hidden flag in this vulnerable login form'
    },
    { 
      id: 2, 
      title: 'Buffer Overflow Mystery', 
      category: 'Reverse Engineering', 
      difficulty: 'Hard', 
      points: 500, 
      solved: 8,
      description: 'Exploit the buffer overflow to gain system access'
    },
    { 
      id: 3, 
      title: 'Cryptographic Puzzle', 
      category: 'Cryptography', 
      difficulty: 'Medium', 
      points: 300, 
      solved: 23,
      description: 'Decrypt the message using classical cipher techniques'
    },
    { 
      id: 4, 
      title: 'Network Forensics', 
      category: 'Forensics', 
      difficulty: 'Medium', 
      points: 250, 
      solved: 17,
      description: 'Analyze the packet capture to find suspicious activity'
    },
  ];

  const challengePacks = [
    {
      id: 1,
      title: 'Web Security Fundamentals',
      description: 'Complete collection of web application security challenges',
      challenges: 12,
      difficulty: 'Beginner to Intermediate',
      size: '45 MB'
    },
    {
      id: 2,
      title: 'Advanced Cryptography',
      description: 'Complex cryptographic puzzles and modern encryption challenges',
      challenges: 8,
      difficulty: 'Advanced',
      size: '32 MB'
    },
    {
      id: 3,
      title: 'Digital Forensics Suite',
      description: 'Real-world forensics scenarios and evidence analysis',
      challenges: 15,
      difficulty: 'Intermediate to Advanced',
      size: '128 MB'
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen terminal-bg text-cyber-green font-mono">
      {/* Terminal Header */}
      <div className="terminal-border bg-black/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="matrix-text text-2xl font-bold hover:animate-glitch">
              [SecureTech_CTF]
            </Link>
            <div className="text-cyber-green/60">
              <span className="animate-flicker">█</span> TERMINAL READY
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/cybersecurity" className="hover:text-white transition-colors">
              ../cybersecurity
            </Link>
            <div className="text-cyber-green/60">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="matrix-text mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-text" data-text="CAPTURE THE FLAG">
              CAPTURE THE FLAG
            </h1>
            <div className="text-xl text-cyber-green/80 mb-8">
              > Welcome to the underground hacking competition
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="terminal-border bg-black/30 p-6">
              <Users className="h-8 w-8 text-cyber-green mx-auto mb-2" />
              <div className="text-2xl font-bold">127</div>
              <div className="text-cyber-green/60">Active Hackers</div>
            </div>
            <div className="terminal-border bg-black/30 p-6">
              <Flag className="h-8 w-8 text-cyber-green mx-auto mb-2" />
              <div className="text-2xl font-bold">42</div>
              <div className="text-cyber-green/60">Challenges Live</div>
            </div>
            <div className="terminal-border bg-black/30 p-6">
              <Clock className="h-8 w-8 text-cyber-green mx-auto mb-2" />
              <div className="text-2xl font-bold">72:15:33</div>
              <div className="text-cyber-green/60">Time Remaining</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTF Interface */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-cyber-green/30">
              <TabsTrigger value="scoreboard" className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green">
                Scoreboard
              </TabsTrigger>
              <TabsTrigger value="challenges" className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green">
                Challenges
              </TabsTrigger>
              <TabsTrigger value="packs" className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green">
                Challenge Packs
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-cyber-green/20 data-[state=active]:text-cyber-green">
                About CTF
              </TabsTrigger>
            </TabsList>

            {/* Scoreboard */}
            <TabsContent value="scoreboard" className="space-y-6 mt-8">
              <div className="terminal-border bg-black/30 p-6">
                <h2 className="matrix-text text-3xl mb-6 flex items-center">
                  <Trophy className="h-8 w-8 mr-3 text-yellow-400" />
                  LIVE LEADERBOARD
                </h2>
                <div className="space-y-4">
                  {leaderboard.map((team) => (
                    <div
                      key={team.rank}
                      className={`flex items-center justify-between p-4 terminal-border bg-black/20 hover:bg-cyber-green/10 transition-colors ${
                        team.rank <= 3 ? 'neon-glow' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          team.rank === 1 ? 'bg-yellow-400 text-black' :
                          team.rank === 2 ? 'bg-gray-300 text-black' :
                          team.rank === 3 ? 'bg-orange-400 text-black' :
                          'bg-cyber-green/20 text-cyber-green'
                        }`}>
                          {team.rank}
                        </div>
                        <div>
                          <div className="text-lg font-bold">{team.team}</div>
                          <div className="text-cyber-green/60 text-sm">{team.members} members</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyber-green">{team.score}</div>
                        <div className="text-cyber-green/60 text-sm">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Challenges */}
            <TabsContent value="challenges" className="space-y-6 mt-8">
              <div className="terminal-border bg-black/30 p-6">
                <h2 className="matrix-text text-3xl mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3 text-red-400" />
                  ACTIVE CHALLENGES
                </h2>
                <div className="grid gap-6">
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="terminal-border bg-black/20 p-6 hover:bg-cyber-green/5 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-cyber-green">{challenge.title}</h3>
                            <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="outline" className="border-cyber-green/30 text-cyber-green">
                              {challenge.category}
                            </Badge>
                          </div>
                          <p className="text-cyber-green/80 mb-3">{challenge.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-cyber-green/60">
                            <span>💎 {challenge.points} points</span>
                            <span>✅ {challenge.solved} solved</span>
                          </div>
                        </div>
                        <Button className="bg-cyber-green/20 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/30">
                          <Zap className="h-4 w-4 mr-2" />
                          Hack Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Challenge Packs */}
            <TabsContent value="packs" className="space-y-6 mt-8">
              <div className="terminal-border bg-black/30 p-6">
                <h2 className="matrix-text text-3xl mb-6 flex items-center">
                  <Download className="h-8 w-8 mr-3 text-blue-400" />
                  CHALLENGE PACKS
                </h2>
                <div className="grid gap-6">
                  {challengePacks.map((pack) => (
                    <div key={pack.id} className="terminal-border bg-black/20 p-6 hover:bg-cyber-green/5 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cyber-green mb-2">{pack.title}</h3>
                          <p className="text-cyber-green/80 mb-4">{pack.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-cyber-green/60">
                            <span>📁 {pack.challenges} challenges</span>
                            <span>⚡ {pack.difficulty}</span>
                            <span>💾 {pack.size}</span>
                          </div>
                        </div>
                        <Button className="bg-cyber-green/20 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green/30">
                          <Download className="h-4 w-4 mr-2" />
                          Download Pack
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About CTF */}
            <TabsContent value="about" className="space-y-6 mt-8">
              <div className="terminal-border bg-black/30 p-6">
                <h2 className="matrix-text text-3xl mb-6 flex items-center">
                  <Star className="h-8 w-8 mr-3 text-purple-400" />
                  ABOUT THE CTF
                </h2>
                <div className="space-y-6 text-cyber-green/80">
                  <div>
                    <h3 className="text-xl font-bold text-cyber-green mb-3">Competition Rules</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Teams can have up to 5 members maximum</li>
                      <li>Individual participation is also welcome</li>
                      <li>No attacking other teams or the platform infrastructure</li>
                      <li>Share knowledge, not answers - collaboration over competition</li>
                      <li>All tools and techniques are allowed unless explicitly forbidden</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-cyber-green mb-3">Challenge Categories</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="terminal-border bg-black/20 p-4">
                        <strong>Web Security:</strong> SQL injection, XSS, authentication bypasses
                      </div>
                      <div className="terminal-border bg-black/20 p-4">
                        <strong>Cryptography:</strong> Classical ciphers, modern encryption, hash cracking
                      </div>
                      <div className="terminal-border bg-black/20 p-4">
                        <strong>Reverse Engineering:</strong> Binary analysis, decompilation, malware analysis
                      </div>
                      <div className="terminal-border bg-black/20 p-4">
                        <strong>Forensics:</strong> Memory dumps, network analysis, steganography
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-cyber-green mb-3">Scoring System</h3>
                    <p>
                      Dynamic scoring based on challenge difficulty and solve rate. 
                      First blood bonuses available for the first team to solve each challenge.
                      Points decrease as more teams solve the same challenge.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="terminal-border bg-black/50 p-6 text-center">
        <div className="matrix-text">
          <p className="text-cyber-green/60 mb-2">
            [System Status: ONLINE] | [Uptime: 99.9%] | [Threats Neutralized: ∞]
          </p>
          <p className="text-cyber-green/40">
            © 2024 SecureTech CTF Platform - May the best hacker win
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CTF;
