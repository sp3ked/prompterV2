import { Terminal, Cpu, Database, Box } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32"> {/* Adjust padding to prevent overlap */}
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-black">REAL-TIME AI</span>
            <br />
            <span className="text-green-500">PROMPT ENGINEERING</span>
          </h1>
          <p className="text-xl text-green-500 mb-8">
            Build, Test, and Deploy AI Prompts
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 mb-20">
          <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
            <div className="flex items-center mb-4">
              <Terminal className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">PROMPT CREATION</h2>
            </div>
            <p className="text-gray-700">
              Create and test AI prompts in a simple, intuitive, and fast-to-learn environment
            </p>
          </div>

          <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">BUILT-IN TOOLS</h2>
            </div>
            <p className="text-gray-700">
              Utilize built-in tools for prompt optimization, testing, and deployment
            </p>
          </div>

          <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">PROMPT LIBRARY</h2>
            </div>
            <p className="text-gray-700">
              Access and manage a library of pre-built and custom AI prompts
            </p>
          </div>
        </div>

        {/* Starter Kit Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">PROMPT ENGINEERING STARTER KIT</h2>
          <p className="text-center text-gray-700 mb-12">
            Deploy real AI pipelines with our pre-assembled kit or build it yourself.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Box className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">PRE-BUILT KIT</h3>
                <p className="text-gray-700 mb-8">
                  Complete prompt engineering kit with all components pre-assembled and tested
                </p>
                <button className="text-green-500 hover:text-green-400 transition-colors">
                  VIEW OPTIONS →
                </button>
              </div>
            </div>

            <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300 hover:border-green-500 transition-colors">
              <div className="flex flex-col items-center text-center">
                <Database className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">DIY KIT</h3>
                <p className="text-gray-700 mb-8">
                  Build your own custom prompt engineering setup with our curated selection of parts
                </p>
                <button className="text-blue-500 hover:text-blue-400 transition-colors">
                  EXPLORE PARTS →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">PROMPT ENGINEERING SUITE</h2>
          <div className="bg-green-100 p-8 rounded-lg border-2 border-green-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Build & Store Prompts</h3>
                <p className="text-gray-700 mb-4">
                  Create, modify, and manage your AI prompts with our advanced prompt engineering tools
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-200 p-4 rounded">
                    <h4 className="font-bold mb-2">Template Library</h4>
                    <p className="text-gray-700">Access pre-built prompt templates</p>
                  </div>
                  <div className="bg-green-200 p-4 rounded">
                    <h4 className="font-bold mb-2">Version Control</h4>
                    <p className="text-gray-700">Track changes and manage prompt versions</p>
                  </div>
                  <div className="bg-green-200 p-4 rounded">
                    <h4 className="font-bold mb-2">Collaborative Tools</h4>
                    <p className="text-gray-700">Share and collaborate on prompts</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-200 rounded p-4">
                <div className="border-2 border-green-300 rounded h-full p-4">
                  <p className="text-green-500 font-mono">Prompt Preview</p>
                  <p className="text-gray-700 font-mono mt-4">
                    Configure and test your prompts in real-time with our interactive editor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Start Building Prompts Today
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;