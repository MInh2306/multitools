import React from 'react';
import { Mail } from 'lucide-react';
import ToolPageLayout from '../components/ToolPageLayout';
import { toolService } from '../services/geminiService';

const MailToTask: React.FC = () => {
  return (
    <ToolPageLayout
      title="Mail to Task"
      description="Paste an email thread below. The AI will summarize the context, extract action items, and draft a response for you."
      placeholder="Paste the email content here..."
      icon={<Mail size={32} />}
      onRun={toolService.mailToTask}
    />
  );
};

export default MailToTask;