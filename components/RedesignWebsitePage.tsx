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
import { ArrowLeft, ArrowRight, Upload, CheckCircle, RefreshCw, Link } from 'lucide-react';

interface RedesignFormData {
  websiteUrl: string;
  currentIssues: string[];
  desiredChanges: string[];
  keepServices: string;
  designStyle: string;
  exampleFiles: File[];
  exampleUrls: string;
  additionalNotes: string;
  email: string
}

const currentIssues = [
  'Poor navigation',
  'Outdated visuals',
  'Slow loading',
  'Inconsistent branding',
  'Poor mobile experience',
  'Low conversion rates',
  'Hard to find information',
  'Other'
];

const desiredChanges = [
  'Complete visual overhaul',
  'Improve user experience',
  'Mobile optimization',
  'Faster loading speed',
  'Better navigation',
  'Modern design elements',
  'Brand consistency',
  'Enhanced functionality'
];

const designStyles = [
  { value: 'modern', label: 'Modern' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'clean', label: 'Clean' },
  { value: 'professional', label: 'Professional' },
  { value: 'other', label: 'Other' }
];

export function RedesignWebsitePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<RedesignFormData>({
    websiteUrl: '',
    currentIssues: [],
    desiredChanges: [],
    keepServices: '',
    designStyle: '',
    exampleFiles: [],
    exampleUrls: '',
    additionalNotes: '',
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
    console.log('Redesign Form Data:', formData);
  };

  const updateFormData = (field: keyof RedesignFormData, value: string | number | boolean | object | File) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'currentIssues' | 'desiredChanges', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  if (isSubmitted) {
    return (
      <section id="redesign-website" className="py-24 bg-black min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 border border-white/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Redesign Request Submitted!
            </h2>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We&apos;ve received your redesign requirements. Our team will analyze your current website and prepare a comprehensive redesign proposal within 24-48 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  websiteUrl: '', currentIssues: [], desiredChanges: [], keepServices: '',
                  designStyle: '', exampleFiles: [], exampleUrls: '',
                  email: '', additionalNotes: ''
                });
              }}
              className="bg-black text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="redesign-website" className="py-24 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with diagonal split design concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <RefreshCw className="h-6 w-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Refresh. Revamp. Reinvent.
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tell us what&apos;s missing and let&apos;s rebuild it into something remarkable
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black/30 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          {/* Step 1: Existing Website Info */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Existing Website Information
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="websiteUrl" className="text-white mb-2 flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    Enter your website URL
                  </Label>
                  <Input
                    id="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={(e) => updateFormData('websiteUrl', e.target.value)}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <Label className="text-white mb-4">What are the current design issues?</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {currentIssues.map((issue) => (
                      <div key={issue} className="flex items-center space-x-3">
                        <Checkbox
                          checked={formData.currentIssues.includes(issue)}
                          onCheckedChange={() => toggleArrayValue('currentIssues', issue)}
                          className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-black"
                        />
                        <Label className="text-gray-300 text-sm">{issue}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Desired Changes */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Desired Changes
              </h2>

              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-4">What do you want improved?</Label>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {desiredChanges.map((change) => (
                      <div key={change} className="flex items-center space-x-3">
                        <Checkbox
                          checked={formData.desiredChanges.includes(change)}
                          onCheckedChange={() => toggleArrayValue('desiredChanges', change)}
                          className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-black"
                        />
                        <Label className="text-gray-300 text-sm">{change}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-4">Are you changing services/products or keeping them?</Label>
                  <RadioGroup
                    value={formData.keepServices}
                    onValueChange={(value) => updateFormData('keepServices', value)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="keep" className="border-white/40 text-white" />
                      <Label className="text-gray-300">Keep the same</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="change" className="border-white/40 text-white" />
                      <Label className="text-gray-300">Make changes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unsure" className="border-white/40 text-white" />
                      <Label className="text-gray-300">Not sure yet</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Design Preferences */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Design Preferences
              </h2>

              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-4">Preferred style?</Label>
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
                  <Label className="text-white mb-2">Examples you like (upload files)</Label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-white/40 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Upload design examples, screenshots, or inspiration images</p>
                    <p className="text-gray-500 text-xs mt-1">PNG, JPG, PDF up to 10MB each</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="exampleUrls" className="text-white mb-2">Or share website URLs you like</Label>
                  <Textarea
                    id="exampleUrls"
                    value={formData.exampleUrls}
                    onChange={(e) => updateFormData('exampleUrls', e.target.value)}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Share URLs of websites you find inspiring..."
                    rows={3}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Additional Notes */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Additional Details
              </h2>

              <div>
                <Label htmlFor="additionalNotes" className="text-white mb-2">Tell us more about your vision</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Share specific pain points, goals for the redesign, competitor websites to avoid or emulate, target audience changes, or any other detailed suggestions that would help us understand your vision..."
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
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}

            <div className="flex-1" />

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 px-8"
              >
                Request Redesign
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="h-4 w-4 ml-2" />
                </motion.div>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
