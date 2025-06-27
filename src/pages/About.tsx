
import Navigation from '../components/Navigation';
import AtomVisualization from '../components/AtomVisualization';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Calendar, GraduationCap, Heart, Code, Coffee, GitBranchPlus, Code2Icon } from 'lucide-react';
import { Drawer } from 'vaul';
import { FilePenLine } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <AtomVisualization />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About me</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get to know more about who I am, my journey, and what drives me
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Personal Info */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-100" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Full Name</h3>
                    <p className="text-gray-300">Midhun Prahash SR</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Location</h3>
                    <p className="text-gray-300">Chennai</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Age</h3>
                    <p className="text-gray-300">21</p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-100" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Degree</h3>
                    <p className="text-gray-300">B-Tech</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">University</h3>
                    <p className="text-gray-300">St.Joseph's Institute of Technology</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Year</h3>
                    <p className="text-gray-300">2027</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Biography */}
            <Card className="bg-gray-900/50 border-gray-800 mb-12">
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I am a passionate software developer with a keen interest in building ML, DL based
                  innovative solutions that make a difference. My journey began with a
                  fascination for technology and has evolved into a commitment to creating
                  impactful applications.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Throughout my learning journey, I have worked on various projects that challenged me
                  to think outside the box and push the boundaries of what is possible.
                  I believe in the power of collaboration and continuously seek opportunities
                  to learn from others while sharing my knowledge and experiences.
                </p>
              </CardContent>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="bg-gray-900/50 border-gray-800 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-amber-100" />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Code className="w-8 h-8 text-amber-100 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Coding</h3>
                    <p className="text-gray-400 text-sm">Building impactful solutions through applications</p>
                  </div>
                  <div className="text-center">
                    <GitBranchPlus className="w-8 h-8 text-amber-100 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Git</h3>
                    <p className="text-gray-400 text-sm">Fueling creativity one branch at a time</p>
                  </div>
                  <div className="text-center">
                    <FilePenLine className="w-8 h-8 text-amber-100 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Sketch</h3>
                    <p className="text-gray-400 text-sm">Sketch out the Algos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            {/* <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle>Fun Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="font-semibold text-amber-100 mb-2">Favorite Quote</h3>
                    <p className="text-gray-300 italic">"Add your favorite quote here"</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="font-semibold text-amber-100 mb-2">Random Fact</h3>
                    <p className="text-gray-300">Share something interesting about yourself</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="font-semibold text-amber-100 mb-2">Dream Destination</h3>
                    <p className="text-gray-300">Where would you love to visit?</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <h3 className="font-semibold text-amber-100 mb-2">Superpower</h3>
                    <p className="text-gray-300">What superpower would you choose?</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
