'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Phone, Mail, Clock, CheckCircle, Calendar, User, Globe, MessageSquare } from 'lucide-react';
import Image from 'next/image';


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  challenge: string;
  preferredDate: string;
  preferredTime: string;
  auditType: string;
  agreement: boolean;
}

export function FreeAuditPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    challenge: '',
    preferredDate: '',
    preferredTime: '',
    auditType: 'quick',
    agreement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Generate available dates (next 7 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    const currentDate = new Date(today);

    while (count < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();

      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          value: currentDate.toISOString().split('T')[0],
          label: currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
          })
        });
        count++;
      }
    }

    return dates;
  };

  const availableDates = generateAvailableDates();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="free-audit" className="py-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <Image src='logo.jpeg' alt="Loading" />
            </motion.div>

            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>

            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Thank you, {formData.fullName}!
            </h2>

            <p
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We&apos;ve scheduled your free UX audit call for{' '}
              <span className="font-semibold text-blue-600">
                {availableDates.find(d => d.value === formData.preferredDate)?.label} at {formData.preferredTime}
              </span>
              . You&apos;ll receive an email shortly with the details.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3
                className="font-semibold text-gray-900 mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                What happens next?
              </h3>
              <ul className="text-left space-y-2 text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  You&apos;ll receive a confirmation email with Meet link
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  We&apos;ll review your website before the call
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Get actionable insights to improve your UX
                </li>
              </ul>
            </div>

            <p
              className="text-sm text-gray-500"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              If you have any questions, feel free to contact us at{' '}
              <a href="mailto:anveron42@gmail.com" className="text-blue-600 hover:underline">
                anveron42@gmail.com
              </a>
              {' '}or call us at{' '}
              <a href="tel:+917991004886" className="text-blue-600 hover:underline">
                +91 799 100 4886
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="free-audit" className="py-16 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Free UX Audit
          </Badge>
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Let&apos;s Connect & Improve Your UX Together
          </h1>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Fill out the form below or reach us directly by email or phone. Choose a date that works for you,
            and we&apos;ll schedule your free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle
                  className="flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Phone className="h-5 w-5 text-blue-600" />
                  Direct Contact
                </CardTitle>
                <CardDescription style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Reach out to us anytime during business hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p
                      className="font-medium text-gray-900"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:anveron42@gamil.com"
                      className="text-blue-600 hover:underline"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      anveron42@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p
                      className="font-medium text-gray-900"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+917991004886"
                      className="text-green-600 hover:underline"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      +91 799 100 4886
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p
                      className="font-medium text-gray-900"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Business Hours
                    </p>
                    <p
                      className="text-orange-600"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Mon - Fri, 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    We&apos;re available on weekdays to guide you through the process and help improve your user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Schedule Your Free UX Audit
                </CardTitle>
                <CardDescription style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Tell us about your project and we&apos;ll provide valuable insights to improve your user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="flex items-center gap-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <User className="h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="websiteUrl"
                        className="flex items-center gap-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <Globe className="h-4 w-4" />
                        Website URL *
                      </Label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        placeholder="Paste your website or product link"
                        value={formData.websiteUrl}
                        onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                        required
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Challenge Description */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="challenge"
                      className="flex items-center gap-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      What&apos;s the biggest challenge you&apos;re facing? *
                    </Label>
                    <Textarea
                      id="challenge"
                      placeholder="Describe briefly the area you want to improve"
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      required
                      rows={4}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>

                  {/* Scheduling */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        className="flex items-center gap-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <Calendar className="h-4 w-4" />
                        Preferred Date *
                      </Label>
                      <Select
                        value={formData.preferredDate}
                        onValueChange={(value) => handleInputChange('preferredDate', value)}
                        required
                      >
                        <SelectTrigger style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          <SelectValue placeholder="Select a date" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDates.map((date) => (
                            <SelectItem key={date.value} value={date.value}>
                              {date.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        className="flex items-center gap-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <Clock className="h-4 w-4" />
                        Preferred Time *
                      </Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange('preferredTime', value)}
                        required
                      >
                        <SelectTrigger style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Audit Type */}
                  <div className="space-y-2">
                    <Label style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Audit Type (Optional)
                    </Label>
                    <Select
                      value={formData.auditType}
                      onValueChange={(value) => handleInputChange('auditType', value)}
                    >
                      <SelectTrigger style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quick">Quick Review (30 mins)</SelectItem>
                        <SelectItem value="detailed">Detailed Review (60 mins)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => handleInputChange('agreement', checked as boolean)}
                      required
                    />
                    <Label
                      htmlFor="agreement"
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      I agree to share my project details with Anveron for consultation purposes. *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
                    disabled={isLoading}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Image src='logo.jpeg' alt="Loading" />
                      </motion.div>
                    ) : null}
                    {isLoading ? 'Scheduling Your Call...' : 'Schedule My Free Audit Call'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
