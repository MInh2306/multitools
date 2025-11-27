import React from 'react';
import { Calendar } from 'lucide-react';
import ToolPageLayout from '../components/ToolPageLayout';
import { toolService } from '../services/geminiService';

const TodayWorkRecap: React.FC = () => {
  return (
    <ToolPageLayout
      title="Today Work Recap"
      description="List the tasks you completed today. The AI will convert them into a professional summary paragraph for your daily report."
      placeholder="- Fixed bug in login header&#10;- Deployed v2.1 to staging&#10;- Meeting with design team regarding dashboard&#10;- Reviewed PR #402"
      icon={<Calendar size={32} />}
      onRun={toolService.todayWorkRecap}
    />
  );
};

export default TodayWorkRecap;