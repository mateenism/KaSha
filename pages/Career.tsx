import React, { useState } from 'react';
import Hero from '../components/Hero';
import { 
    BriefcaseIcon, 
    UsersIcon, 
    UploadCloudIcon,
    AwardIcon,
    HeartIcon,
    MapPinIcon
} from '../components/icons';
import { WHY_JOIN_US_CAREERS, JOB_OPENINGS_DATA } from '../constants';

const whyUsIconMap: { [key: string]: React.FC<{className?: string}> } = {
    'Briefcase': BriefcaseIcon,
    'Award': AwardIcon,
    'Users': UsersIcon,
    'Heart': HeartIcon
};

const Career: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEvent = (e: React.DragEvent<HTMLLabelElement>, action: 'over' | 'leave') => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(action === 'over');
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    handleDragEvent(e, 'leave');
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
        setResumeFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
        setResumeFile(files[0]);
    }
  };
  
  const handleApplyNowClick = (positionTitle: string) => {
    const form = document.getElementById('apply-form');
    const positionInput = document.getElementById('position') as HTMLInputElement;
    if (form) {
      if (positionInput) {
        positionInput.value = positionTitle;
      }
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-light dark:bg-brand-dark">
      <Hero 
        title={<>Join Our <span className="text-brand-gold">Team</span></>}
        subtitle="Be part of India's leading event management company."
        imageUrl="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Why Join KaSha Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                 <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light mb-4">Why Join <span className="text-brand-gold">KaSha</span></h2>
                 <p className="text-lg text-brand-gray">Be part of India’s leading event management company</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {WHY_JOIN_US_CAREERS.map(item => {
                    const Icon = whyUsIconMap[item.icon];
                    return (
                        <div key={item.title} className="bg-white dark:bg-brand-dark-secondary p-8 rounded-lg shadow-md border border-gray-100 dark:border-brand-dark-secondary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-gold/10 text-brand-gold mx-auto mb-5">
                                {Icon && <Icon className="w-8 h-8"/>}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark dark:text-brand-light mb-2">{item.title}</h3>
                            <p className="text-brand-gray text-sm">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-brand-light-secondary dark:bg-brand-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light">Open <span className="text-brand-gold">Positions</span></h2>
                <p className="text-brand-gray mt-2">Find your perfect role</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {JOB_OPENINGS_DATA.map(job => (
                    <div key={job.title} className="bg-white dark:bg-brand-dark p-8 rounded-lg shadow-lg border-l-4 border-brand-gold transition-all hover:shadow-xl flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-light">{job.title}</h3>
                                <p className="text-brand-gold font-semibold text-sm">{job.category}</p>
                            </div>
                            <span className="text-xs font-semibold bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full">{job.type}</span>
                        </div>
                        <p className="text-brand-gray mb-6 flex-grow">{job.description}</p>
                        <div className="flex items-center space-x-6 text-brand-gray text-sm mb-6">
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-2"/>
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                                <BriefcaseIcon className="w-4 h-4 mr-2"/>
                                <span>{job.experience}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleApplyNowClick(job.title)}
                            className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors"
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Apply Now Section */}
      <section id="apply-form" className="py-20 bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-serif text-brand-dark dark:text-brand-light">Apply <span className="text-brand-gold">Now</span></h2>
            <p className="text-brand-gray mt-4">Send us your application</p>
          </div>
          <div className="mt-12 bg-white dark:bg-brand-dark-secondary p-8 sm:p-12 rounded-lg shadow-xl">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Full Name *</label>
                        <input type="text" id="name" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Email Address *</label>
                        <input type="email" id="email" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Phone Number *</label>
                        <input type="tel" id="phone" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    </div>
                    <div>
                        <label htmlFor="position" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Position Applied For *</label>
                        <input type="text" id="position" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="experience-years" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Years of Experience *</label>
                    <input type="text" id="experience-years" className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold" />
                </div>
                <div>
                    <label htmlFor="cover-letter" className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Cover Letter / Message *</label>
                    <textarea id="cover-letter" rows={5} placeholder="Tell us why you'd be a great fit for KaSha..." className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark border border-gray-200 dark:border-brand-gray/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"></textarea>
                </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark dark:text-brand-light mb-2">Upload Resume *</label>
                <label 
                    htmlFor="resume-upload"
                    onDragOver={(e) => handleDragEvent(e, 'over')}
                    onDragLeave={(e) => handleDragEvent(e, 'leave')}
                    onDrop={handleDrop}
                    className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md cursor-pointer transition-colors ${isDragging ? 'border-brand-gold bg-brand-gold/10' : 'border-gray-300 dark:border-brand-gray/30'}`}
                >
                  <div className="space-y-1 text-center">
                    <UploadCloudIcon className="mx-auto h-12 w-12 text-brand-gray" />
                    <div className="flex text-sm text-brand-gray justify-center">
                      <p>
                        {resumeFile ? (
                            <span className="text-brand-dark dark:text-brand-light font-semibold">{resumeFile.name}</span>
                        ) : (
                            <>
                              Click to upload or drag and drop
                            </>
                        )}
                      </p>
                    </div>
                    <p className="text-xs text-brand-gray">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                  <input id="resume-upload" name="resume-upload" type="file" className="sr-only" onChange={handleFileChange} />
                </label>
              </div>
              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-bold py-4 px-8 rounded-md hover:bg-yellow-500 transition-colors">
                    Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
