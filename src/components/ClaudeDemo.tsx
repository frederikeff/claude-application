'use client'

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MessageSquare, Code, Lightbulb, Target } from 'lucide-react';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import ProjectDescription from '@/components/ProjectDescription';


interface UseCase {
    id: string;
    title: string;
    description: string;
    example: string;
    videoId?: string; // Optional YouTube video ID
    hasLinks?: boolean;
  }
  
  const ClaudeDemo: React.FC = () => {

  
  const useCases: UseCase[] = [
    {
        id: 'programming',
        title: 'Pair Programming',
        hasLinks: true,
        description: 'Claude excels as my programming partner, helping me achieve multiple tech products:\n\n' + 
          '• Built three complete websites: ' +
          '<a href="https://nytechventures.com" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-red-900 font-medium hover:underline">nytechventures.com</a>, ' +
          '<a href="https://www.wonderfabe.com/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-red-900 font-medium hover:underline">wonderfabe.com</a>, and ' +
          '<a href="https://tickles-new-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-red-900 font-medium hover:underline">tickles.me</a>\n' +
          '• Created multiple landing pages with responsive designs\n' +
          '• Currently developing a custom CRM system with AI capabilities\n' +
          '• Learning programming concepts through detailed explanations and examples by Claude\n' +
          '• Mastering prompt engineering for optimal results',
        example: 'Recent example: Claude helped me build this application site as a non-programmer, handling both the technical implementation and design suggestions.'
    },
    {
        id: 'visual-presentations',
        title: 'Visual Presentations',
        hasLinks: false,
        description: 'Leveraging Claude for creating impactful visual content:\n\n' +
          '• Crafting investor pitch decks with compelling narratives\n' +
          '• Designing QBR presentations that highlight key metrics\n' +
          '• Developing client proposals with clear value propositions\n' +
          '• Creating SVG graphics for social media content\n' +
          '• Creating full CVs in a visually programmed design\n' +
          '• Iterating on designs with specific feedback',
        example: 'Latest project: Created a full client Business Review and Sales presentation deck, refined over three iterations with Claude, fine-tuned in Figma and re-ordered in Canva.',
        videoId: 'SS4R5U6BiW0'
    },
    {
        id: 'writing',
        title: 'Content Creation',
        hasLinks: false,
        description: 'Collaborative content creation across multiple formats:\n\n' +
          '• Optimizing LinkedIn posts for better engagement\n' +
          '• Crafting attention-grabbing headlines\n' +
          '• Creating engaging social media content\n' +
          '• Developing technical documentation\n' +
          '• Writing creative content that resonates with audiences',
        example: 'Recent success: Created a LinkedIn post together with a 10-page carousel and achieved a 300% higher engagement rate than average.'
    },
    {
        id: 'everything-else',
        title: 'Everything Else',
        description: 'Diverse applications in daily workflows:\n\n' +
          '• Researching industry guidelines and legal requirements\n' +
          '• Analyzing complex problems from multiple angles\n' +
          '• Creating step-by-step guides for various processes\n' +
          '• Generating innovative solutions to business challenges\n' +
          '• Creating full curriculums for i.e. B2B SaaS and Programming trainings with examples and hands-on tasks\n' +
          '• Troubleshooting a variety of issues and processes that are broken in one way or the other\n' +
          '• Supporting day-to-day decision making',
        example: 'Recent use case: Developed a step-by-step guideline for a complex legal challenge with core legal document insights and strong logical reasoning that won me the case.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hello Anthropic Team! 👋
        </h1>
        <p className="text-xl">
          I am excited to show you why I wanna work in your team
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a 
            href="https://linkedin.com/in/frederikefalke" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="mailto:frederike.falke@gmail.com" 
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-base sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1aDN9ljRwIKpuD5_rv0pne7uzjBTGSSJc/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-base sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV
          </a>

          <a 
            href="https://github.com/frederikeff" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-base sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a 
            href="https://www.amazon.com/Enterprise-Customer-Success-Bible-Successfully/dp/391072213X" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-base sm:text-sm md:text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            CS Book
          </a>
        </div>
      </div>

      <Tabs defaultValue="intro" className="mb-8">
        <TabsList className="grid grid-cols-4 gap-4">
          <TabsTrigger value="intro" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Introduction
          </TabsTrigger>
          <TabsTrigger value="usecases" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Use Cases
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Technical Demo
          </TabsTrigger>
          <TabsTrigger value="vision" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Vision
          </TabsTrigger>
        </TabsList>

        <TabsContent value="intro" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>First and foremost because I am excited about Claude</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose">
                <p>
                Claude is my personal assistant in most of my tasks. It is the tool I use the most throughout my personal and professional projects and I deliberately switched from ChatGPT to Claude some months ago. Why? Because Claude stands out from other AI models for:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li className="mb-2">
                    Its capability of previewing what it produces and thus allowing for faster iterations and adaptations
                  </li>
                  <li className="mb-2">
                    Its strong programming abilities - I am able to program apps without a technical background
                  </li>
                  <li className="mb-2">
                    Its SVG format designs that allow for many more use cases than the other AI assistants
                  </li>
                  <li className="mb-2">
                    Its continuous improvements - longer chats, adapted iterations, memory capabilities
                  </li>
                  <li>
                    Anthropics research towards new and advanced ways of how to use AI and solve challenges
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usecases" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            {useCases.map(useCase => (
              <Card key={useCase.id}>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose">
                    <ProjectDescription 
                        description={useCase.description}
                        hasLinks={useCase.hasLinks} 
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="font-mono text-sm">{useCase.example}</p>
                  </div>
                  {useCase.videoId && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Watch How It Works:</h3>
                      <YoutubeEmbed videoId={useCase.videoId} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="technical" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Technical Demonstration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose">
                <p>
                  Here is a live example of how I use Claude for technical tasks. This website
                  was built collaboratively with Claude, demonstrating:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li className="mb-2">React component architecture, Next.js</li>
                  <li className="mb-2">Tailwind CSS styling</li>
                  <li className="mb-2">Interactive UI elements</li>
                  <li>State management</li>
                </ul>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">More details:</h3>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    {`• Implemented responsive design with mobile-first approach
• Added interactive components using shadcn/ui 
• Integrated YouTube embedding functionality
• Deployed via Vercel for seamless hosting
• Added basic metadata and favicons for various screen sizes

Time to completion: ~5 hours of collaborative development`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vision" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Vision for Working with you</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose">
                <p>
                As part of the team at Anthropic, I want to contribute to establishing Claude as the leading AI model by: 
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li className="mb-2">
                    Showcasing the use cases and capabilities of Claude for Work and the Claude API in comparison to other AI models and tools
                  </li>
                  <li className="mb-2">
                    Helping Enterprises to transform their businesses towards an AI-focused era and finding and implementing effective and strategically relevant solutions 
                  </li>
                  <li className="mb-2">
                    Educating and inspiring the wider community of the capabilities of Claude and how they can benefit best
                  </li>
                  <li className="mb-2">
                    Making sure that AI is used in safe and secure ways and that it helps us to move towards utopia, not dystopia 
                  </li>
                  <li className="mb-2">
                    Creating effective and efficient processes, frameworks and content to make the CSM and wider team as effective as possible
                  </li>
                  <li className="mb-2">
                    Building bridges among cross-functional teams to achieve what we set out to achieve as one team while incorporating diverse and innovative perspectives
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClaudeDemo;