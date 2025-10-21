'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Progress } from './ui/progress';
import { ArrowLeft, ArrowRight, Upload, CheckCircle, Sparkles } from 'lucide-react';

interface FormData {
  brandName: string;
  hasLogo: boolean;
  logoFile?: File;
  brandColors: string;
  designStyle: string;
  targetAudience: string[];
  features: string[];
  customFeatures: string;
  finalNotes: string;
  email: string
}

const designStyles = [
  { value: 'modern', label: 'Modern' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'bold', label: 'Bold' },
  { value: 'elegant', label: 'Elegant' },
  { value: 'other', label: 'Other' }
];

const audienceOptions = [
  'Young Professionals', 'Entrepreneurs', 'Small Business Owners',
  'Corporate Clients', 'Students', 'Healthcare Professionals', 'Other'
];

const featureOptions = [
  { value: 'landing', label: 'Landing page' },
  { value: 'contact', label: 'Contact form' },
  { value: 'blog', label: 'Blog section' },
  { value: 'ecommerce', label: 'E-commerce integration' },
  { value: 'portfolio', label: 'Portfolio section' },
  { value: 'animations', label: 'Custom animations' }
];

export function DesignFromScratchPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    brandName: '',
    hasLogo: false,
    brandColors: '',
    designStyle: '',
    targetAudience: [],
    features: [],
    customFeatures: '',
    finalNotes: '',
    email: ''
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('Form Data:', formData);
  };

  const updateFormData = (field: keyof FormData, value: string | number | boolean | object | File) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'targetAudience' | 'features', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  if (isSubmitted) {
    return (
      <section id="design-scratch" className="py-24 bg-black min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 border border-white/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Project Submitted Successfully!
            </h2>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Thank you for choosing Anveron. We&apos;ll review your requirements and get back to you within 24 hours with a detailed proposal.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  brandName: '', hasLogo: false, brandColors: '', designStyle: '',
                  targetAudience: [], features: [], customFeatures: '',
                  email: '', finalNotes: ''
                });
              }}
              className="bg-black text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Submit Another Project
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="design-scratch" className="py-24 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Build Your Brand from the Ground Up
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let&apos;s create a unique, fully tailored design that reflects your vision and stands out
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2 bg-gray-800" />
            <p className="text-sm text-gray-400 mt-2">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/30 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          {/* Step 1: Brand Info */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Brand Information
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="brandName" className="text-white mb-2">What&apos;s your brand name?</Label>
                  <Input
                    id="brandName"
                    value={formData.brandName}
                    onChange={(e) => updateFormData('brandName', e.target.value)}
                    className="placeholder:text-gray-400"
                    placeholder="Enter your brand name"
                  />
                </div>

                <div>
                  <Label className="text-white mb-4">Do you have a logo or colors already?</Label>
                  <RadioGroup
                    value={formData.hasLogo ? 'yes' : 'no'}
                    onValueChange={(value) => updateFormData('hasLogo', value === 'yes')}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" className="border-white/40 text-white" />
                      <Label className="text-gray-300">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" className="border-white/40 text-white" />
                      <Label className="text-gray-300">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.hasLogo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div>
                      <Label className="text-white mb-2">Upload your logo</Label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">Click to upload or drag and drop</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="colors" className="text-white mb-2">Brand Colors (if any)</Label>
                      <Input
                        id="colors"
                        value={formData.brandColors}
                        onChange={(e) => updateFormData('brandColors', e.target.value)}
                        className="placeholder:text-gray-400"
                        placeholder="e.g., #FF5733, #3366CC"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 2: Design Goals */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Design Goals
              </h2>

              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-4">What style are you aiming for?</Label>
                  <RadioGroup
                    value={formData.designStyle}
                    onValueChange={(value) => updateFormData('designStyle', value)}
                    className="grid grid-cols-2 gap-4 mt-2"
                  >
                    {designStyles.map((style) => (
                      <div key={style.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={style.value} className="border-white/40 text-white" />
                        <Label className="text-gray-300">{style.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-white mb-4">What&apos;s your target audience?</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {audienceOptions.map((audience) => (
                      <div key={audience} className="flex items-center space-x-2">
                        <Checkbox
                          checked={formData.targetAudience.includes(audience)}
                          onCheckedChange={() => toggleArrayValue('targetAudience', audience)}
                          className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-black"
                        />
                        <Label className="text-gray-300">{audience}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Features Needed */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Features Needed
              </h2>

              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-4">Select the features you need:</Label>
                  <div className="grid grid-cols-1 gap-4 mt-2">
                    {featureOptions.map((feature) => (
                      <div key={feature.value} className="flex items-center space-x-3">
                        <Checkbox
                          checked={formData.features.includes(feature.value)}
                          onCheckedChange={() => toggleArrayValue('features', feature.value)}
                          className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-black"
                        />
                        <Label className="text-gray-300">{feature.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="customFeatures" className="text-white mb-2">Other custom features needed</Label>
                  <Textarea
                    id="customFeatures"
                    value={formData.customFeatures}
                    onChange={(e) => updateFormData('customFeatures', e.target.value)}
                    className="placeholder:text-gray-400"
                    placeholder="Describe any additional features you need..."
                    rows={3}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Final Notes */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Final Notes
              </h2>

              <div>
                <Label htmlFor="finalNotes" className="text-white mb-2">Tell us more about your dream design...</Label>
                <Textarea
                  id="finalNotes"
                  value={formData.finalNotes}
                  onChange={(e) => updateFormData('finalNotes', e.target.value)}
                  className="placeholder:text-gray-400"
                  placeholder="Share your vision, inspirations, specific requirements, or any additional details that would help us create your perfect design..."
                  rows={6}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white mb-2">What&apos;s your brand name?</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="placeholder:text-gray-400"
                  placeholder="example@gmail.com"
                />
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="liquid-glass-button text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}

            <div className="flex-1" />

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="liquid-glass-cta text-white"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="liquid-glass-cta text-white px-8"
              >
                Submit Project
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 ml-2" />
                </motion.div>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
