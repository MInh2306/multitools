import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Calendar, Database } from 'lucide-react';

const tools = [
  {
    id: 'message2task',
    name: 'Message to Task',
    description: 'Convert messy chat messages into clear, actionable task lists.',
    path: '/message2task',
    icon: <MessageSquare size={32} />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'mail2task',
    name: 'Mail to Task',
    description: 'Analyze emails, summarize content, and draft professional replies.',
    path: '/mail2task',
    icon: <Mail size={32} />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'today-recap',
    name: 'Today Work Recap',
    description: 'Turn your daily task list into a professional status update paragraph.',
    path: '/today-recap',
    icon: <Calendar size={32} />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'makesqlgood',
    name: 'MakeSQLgood',
    description: 'Format, beautify, and fix SQL queries or extract them from logs.',
    path: '/makesqlgood',
    icon: <Database size={32} />,
    color: 'bg-orange-100 text-orange-600',
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12 py-10">
      {/* Big title */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Boost Your <span className="text-primary">Productivity</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Select a tool below to leverage AI for your daily workflow. 
          Simplify tasks, emails, reporting, and coding.
        </p>
      </div>
      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            to={tool.path}
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-xl ${tool.color} transition-colors`}>
                {tool.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-medium flex items-center gap-1">
              Try Tool &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;