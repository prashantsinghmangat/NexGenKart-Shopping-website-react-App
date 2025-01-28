import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Know Who I'M</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">
              Hello! I am Prashant Singh, a Senior Software Developer from Meerut, Uttar Pradesh, India.
            </p>
            
            <p className="mb-6">
              Currently, I am working at Moglix.com, where I specialize in building innovative solutions 
              and delivering high-quality software that drives impactful business results.
            </p>
            
            <p className="mb-6">
              Over the years, I have developed expertise in modern technologies and best practices, 
              helping me craft scalable and efficient software applications. My journey is fueled by 
              a passion for continuous learning and a dedication to staying at the cutting edge of 
              the tech industry.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Outside of Work:</h2>
            <p className="mb-4">
              When I'm not coding, I enjoy engaging in activities that keep me energized and creative:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Playing Cricket</li>
              <li>Traveling to explore new places</li>
              <li>Cycling and staying active</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Me:</h2>
            <p className="mb-2">Email: Prashantsinghmangat5@gmail.com</p>
            <p>Phone: 8360334018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;