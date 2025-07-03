
import Navigation from '../components/Navigation';
import MinimalBackground from '../components/MinimalBackground';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, GraduationCap, Heart, Code, GitBranch, PenTool } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <MinimalBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get to know more about who I am, my journey, and what drives me
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Personal Info */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <MapPin className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Full Name</h3>
                    <p className="text-muted-foreground">Midhun Prahash SR</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Chennai</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Age</h3>
                    <p className="text-muted-foreground">21</p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Degree</h3>
                    <p className="text-muted-foreground">B-Tech</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">University</h3>
                    <p className="text-muted-foreground">St.Joseph's Institute of Technology</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Year</h3>
                    <p className="text-muted-foreground">2027</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Biography */}
            <Card className="border-border bg-card mb-12">
              <CardHeader>
                <CardTitle className="text-card-foreground">My Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am a passionate software developer with a strong interest in building ML and DL-based solutions that create real-world impact. My journey began with a curiosity for technology and has evolved into a mission to develop intelligent, user-centric applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in combining web development and machine learning to solve practical problems—such as NER systems for document parsing, username matching using fuzzy logic, and secure access control platforms. I enjoy working on projects that challenge conventional thinking and push technical boundaries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaboration and continuous learning are core to my approach. I actively engage in peer learning, code reviews, and open discussions to grow both individually and as part of a team. My goal is to keep exploring the synergy between AI and software engineering to build impactful, scalable solutions.
                </p>
              </CardContent>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Heart className="w-5 h-5" />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Code className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Coding</h3>
                    <p className="text-muted-foreground text-sm">Building impactful solutions through applications</p>
                  </div>
                  <div className="text-center">
                    <GitBranch className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Version Control</h3>
                    <p className="text-muted-foreground text-sm">Fueling creativity one branch at a time</p>
                  </div>
                  <div className="text-center">
                    <PenTool className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Sketching</h3>
                    <p className="text-muted-foreground text-sm">Sketch out the algorithms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
