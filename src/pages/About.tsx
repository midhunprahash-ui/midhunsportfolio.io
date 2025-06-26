
import Navigation from '../components/Navigation';
import AtomVisualization from '../components/AtomVisualization';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Calendar, GraduationCap, Heart, Code, Coffee } from 'lucide-react';

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
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
                    <p className="text-gray-300">Add your location here</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Age</h3>
                    <p className="text-gray-300">Add your age here</p>
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
                    <p className="text-gray-300">Add your degree here</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">University</h3>
                    <p className="text-gray-300">Add your university here</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-100 mb-2">Year</h3>
                    <p className="text-gray-300">Add graduation year here</p>
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
                  Write your personal story here. Talk about your journey, what got you into your field, 
                  and what motivates you. This is where you can share your background, experiences, 
                  and what makes you unique.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Add more paragraphs about your professional journey, key milestones, 
                  and your vision for the future. Make it personal and authentic.
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
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Code className="w-8 h-8 text-amber-100 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Coding</h3>
                    <p className="text-gray-400 text-sm">Building amazing applications</p>
                  </div>
                  <div className="text-center">
                    <Coffee className="w-8 h-8 text-amber-100 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Coffee</h3>
                    <p className="text-gray-400 text-sm">Fueling creativity one cup at a time</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-black text-sm font-bold">+</span>
                    </div>
                    <h3 className="font-semibold mb-2">Add More</h3>
                    <p className="text-gray-400 text-sm">Add your own interests here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-gray-900/50 border-gray-800">
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
