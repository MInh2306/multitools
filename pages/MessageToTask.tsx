import React from 'react';
import { MessageSquare } from 'lucide-react';
import ToolPageLayout from '../components/ToolPageLayout';
import { toolService } from '../services/geminiService';

const MessageToTask: React.FC = () => {
  return (
    <ToolPageLayout
      title="Message to Task"
      description="Paste a long, unstructured message below. The AI will analyze it and break it down into a clear list of tasks for you."
      placeholder="e.g. Hey John, we need to update the homepage banner by tomorrow, also don't forget to call the client about the invoice and please send me the Q3 report when you have a sec."
      icon={<MessageSquare size={32} />}
      onRun={toolService.messageToTask}
    />
  );
};

export default MessageToTask;