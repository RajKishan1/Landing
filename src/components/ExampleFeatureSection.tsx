import React from 'react';
import Image from 'next/image';

interface FeatureBenefit {
  id: string;
  text: string;
}

interface FeatureMedia {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface FeatureCTA {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

interface FeatureSectionProps {
  heading: string;
  subtitle?: string;
  description: string;
  benefits?: FeatureBenefit[];
  media?: FeatureMedia;
  ctas?: FeatureCTA[];
  layout?: 'stacked' | 'side-by-side';
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  heading,
  subtitle,
  description,
  benefits = [],
  media,
  ctas = [],
  layout = 'side-by-side',
  className = ''
}) => {
  return (
    <section className={`py-24 px-4 bg-[#171717] relative overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="feature-content">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {heading}
            </h2>
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
                {subtitle}
              </p>
            )}
          </div>

          {/* Body */}
          <div className={`grid gap-16 items-center mb-16 ${layout === 'side-by-side' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
            {/* Text Content */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                {description}
              </p>

              {benefits.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Key Benefits:</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit.id} className="flex items-start space-x-4 group">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-200">
                          {benefit.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Media */}
            {media && (
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                  <div className="relative group">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width || 600}
                      height={media.height || 400}
                      className="w-full h-auto rounded-2xl transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 animate-bounce">
                  <div className="relative">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                      <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
                        <path d="M19 15L19.5 16.5L21 17L19.5 17.5L19 19L18.5 17.5L17 17L18.5 16.5L19 15Z" />
                        <path d="M5 5L5.5 6.5L7 7L5.5 7.5L5 9L4.5 7.5L3 7L4.5 6.5L5 5Z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl opacity-50 blur-lg animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 w-16 h-16 animate-pulse">
                  <div className="relative">
                    <div className="w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-50 blur-md animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          {ctas.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {ctas.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  onClick={cta.onClick}
                  className={`
                    relative group inline-flex items-center px-6 py-3 rounded-2xl font-medium text-lg transition duration-300
                    ${cta.variant === 'primary' 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-cyan-500/25' 
                      : 'bg-transparent text-white border-2 border-gray-500 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20'
                    }
                  `}
                >
                  {cta.variant === 'primary' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative z-10">{cta.text}</span>
                  <svg 
                    className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Example usage component
const ExampleFeatureSection: React.FC = () => {
  const sampleData = {
    heading: "Revolutionary AI-Powered Analytics",
    subtitle: "Transform your data into actionable insights with our cutting-edge platform",
    description: "Our advanced analytics platform combines machine learning with intuitive design to help you make data-driven decisions faster than ever before. Get real-time insights, predictive analytics, and automated reporting all in one place.",
    benefits: [
      { id: "1", text: "Real-time data processing and visualization" },
      { id: "2", text: "Automated insights and predictive analytics" },
      { id: "3", text: "Seamless integration with existing tools" },
      { id: "4", text: "Enterprise-grade security and compliance" }
    ],
    media: {
      src: "/api/placeholder/600/400",
      alt: "Analytics Dashboard Preview",
      width: 600,
      height: 400
    },
    ctas: [
      { text: "Start Free Trial", href: "#trial", variant: "primary" as const },
      { text: "Watch Demo", href: "#demo", variant: "secondary" as const }
    ]
  };

  return <FeatureSection {...sampleData} />;
};

export default ExampleFeatureSection;
