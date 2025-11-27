import React from 'react';
import { Database } from 'lucide-react';
import ToolPageLayout from '../components/ToolPageLayout';
import { toolService } from '../services/geminiService';

const MakeSQLGood: React.FC = () => {
  return (
    <ToolPageLayout
      title="MakeSQLgood"
      description="Paste ugly SQL or database logs. The AI will format it into readable, standard SQL syntax."
      placeholder="SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.total > 100 AND o.status = 'completed' ORDER BY o.created_at DESC"
      icon={<Database size={32} />}
      onRun={toolService.makeSqlGood}
    />
  );
};

export default MakeSQLGood;