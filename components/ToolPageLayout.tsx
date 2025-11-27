import React, { useState } from 'react';
import { Play, Loader2, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  placeholder: string;
  onRun: (input: string) => Promise<string>;
  icon?: React.ReactNode;
}

const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ 
  title, 
  description, 
  placeholder, 
  onRun,
  icon
}) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setOutput(null);
    try {
      const result = await onRun(input);
      setOutput(result);
    } catch (err) {
      setOutput("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Tool Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {icon && <div className="text-primary">{icon}</div>}
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Input
        </label>
        <textarea
          className="w-full h-40 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-y font-mono text-sm"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleRun}
            disabled={loading || !input.trim()}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all
              ${loading || !input.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary hover:bg-secondary shadow-md hover:shadow-lg active:scale-95'}
            `}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processing...
              </>
            ) : (
              <>
                <Play size={20} />
                Run Tool
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Section */}
      {output && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Result</h2>
            <button
              onClick={copyToClipboard}
              className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="p-6 bg-white overflow-x-auto prose prose-indigo max-w-none">
             <ReactMarkdown>{output}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolPageLayout;