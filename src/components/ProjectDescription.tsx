'use client'

interface ProjectDescriptionProps {
    description: string;
    hasLinks?: boolean;
  }

  const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description, hasLinks }) => {
    if (hasLinks) {
      return (
        <div className="space-y-2">
          <p className="mb-4">Claude excels as a programming partner, helping me achieve multiple milestones:</p>
          <ul className="space-y-2 list-disc pl-4">
            <li>
              Built three complete websites:{' '}
              <a 
                href="https://nytechventures.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 font-medium underline decoration-2 hover:text-blue-900"
              >
                nytechventures.com ↗
              </a>
              ,{' '}
              <a 
                href="https://www.wonderfabe.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 font-medium underline decoration-2 hover:text-blue-900"
              >
                wonderfabe.com ↗
              </a>
              , and{' '}
              <a 
                href="https://tickles-new-website.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 font-medium underline decoration-2 hover:text-blue-900"
              >
                tickles.me ↗
              </a>
            </li>
            <li>Created multiple landing pages with responsive designs</li>
            <li>Currently developing a custom CRM system with AI capabilities</li>
            <li>Learning programming concepts through detailed explanations and examples</li>
            <li>Mastering prompt engineering for optimal results</li>
          </ul>
        </div>
      );
    }
  
    return (
      <div className="whitespace-pre-line">
        {description}
      </div>
    );
  };

  export default ProjectDescription;