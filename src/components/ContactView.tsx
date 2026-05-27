import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Send, 
  Loader2, 
  Building, 
  Calendar, 
  Zap, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormInput } from '../types';
import { getSupabase } from '../lib/supabaseClient';

export default function ContactView() {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    company: '',
    industry: 'Manufacturing',
    serviceOfInterest: 'General Inquiry',
    message: '',
    preferredContact: 'email'
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: { [key: string]: string } = {};

    if (!form.name.trim()) tempErrors.name = 'Please provide contact name.';
    if (!form.email.trim()) {
      tempErrors.email = 'Please provide contact email.';
    } else if (!validateEmail(form.email)) {
      tempErrors.email = 'Please enter a valid corporate email address.';
    }
    if (!form.company.trim()) tempErrors.company = 'Please enter company name.';
    if (!form.message.trim()) tempErrors.message = 'Please provide scoping requirements.';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const supabase = getSupabase();
    if (!supabase) {
      setErrors({ message: 'Submission configuration error. Please try again later.' });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('consultation_requests')
        .insert([
          {
            name: form.name,
            email: form.email,
            company: form.company,
            industry: form.industry,
            service_of_interest: form.serviceOfInterest, // DB column naming convention
            message: form.message,
            preferred_contact_method: form.preferredContact // DB column naming convention
          },
        ]);

      if (error) throw error;

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        company: '',
        industry: 'Manufacturing',
        serviceOfInterest: 'General Inquiry',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ message: 'Submission failed. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const consultationSteps = [
    { step: 1, title: 'Submit Consultation Request', desc: 'Complete our form detailing your high-level system challenges, current baseline metrics, and target areas.' },
    { step: 2, title: 'Confidential Assessment', desc: 'We verify your submission within 24 hours, preparing baseline industry benchmarking reports before replying.' },
    { step: 3, title: '30-Min Discovery Session', desc: 'An introductory video-call to clarify operational boundaries, baseline variables, and NDA limits.' },
    { step: 4, title: 'Customized Proposal Design', desc: 'We draft a customized solution blueprint containing clear milestone targets and guaranteed ROI metrics.' },
    { step: 5, title: 'Engagement Onboarding', desc: 'Our process engineers deploy directly onto your operational floor, initiating change coaching cycles.' }
  ];

  return (
    <div id="contact-page-container" className="pt-24 space-y-16 pb-12">
      
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-150 py-12 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xxs font-mono font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">PARTNER WITH US</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#003366] tracking-tight">
              Schedule a Scoping Consultation
            </h1>
            <p className="text-xs md:text-sm text-slate-500 max-w-2xl mt-1.5 leading-relaxed font-semibold">
              Ready to isolate waste, optimize cycle times, and improve margins? Fill out our checklist to trigger a customized operational diagnostic assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SPLIT LAYOUT: Consultation Form vs Contact Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Complete lead capture Contact Form */}
          <motion.div 
            id="book-consultation"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="lg:col-span-7 bg-white rounded border border-slate-200 p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-lg font-extrabold text-[#003366] leading-tight mb-1 uppercase tracking-tight">
              Confidential Scoping Brief
            </h3>
            <p className="text-[10px] text-slate-400 font-mono tracking-widest mb-6 uppercase">
              All submissions are encrypted and NDA-protected
            </p>

            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  id="contact-success-notice" 
                  className="p-8 bg-emerald-50 rounded border-2 border-dashed border-emerald-500/40 text-center space-y-4"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="text-base font-extrabold text-[#003366]">Thank you! Request Submitted.</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed font-semibold">
                    We have successfully registered your corporate brief. A Senior Process Engineer will analyze your parameters and email you within **24 hours** to confirm discovery session scheduling options.
                  </p>
                  <motion.button
                    id="reset-form-success-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2.5 bg-[#003366] text-white hover:bg-[#FF6B35] font-bold rounded text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="scoping-brief-form" 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact_name" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded focus:outline-none focus:ring-1 transition-all font-semibold ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]'
                        }`}
                      />
                      {errors.name && <p className="text-3xs font-semibold text-red-500 leading-none">{errors.name}</p>}
                    </div>

                    {/* Corporate email field */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact_email" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. jdoe@company.com"
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded focus:outline-none focus:ring-1 transition-all font-semibold ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]'
                        }`}
                      />
                      {errors.email && <p className="text-3xs font-semibold text-red-500 leading-none">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact_company" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="contact_company"
                        name="contact_company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Enterprise Enterprises"
                        className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded focus:outline-none focus:ring-1 transition-all font-semibold ${
                          errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]'
                        }`}
                      />
                      {errors.company && <p className="text-3xs font-semibold text-red-500 leading-none">{errors.company}</p>}
                    </div>

                    {/* Industry list dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact_industry" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                        Core Sector
                      </label>
                      <select
                        id="contact_industry"
                        name="contact_industry"
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC] font-semibold text-slate-700"
                      >
                        <option value="Manufacturing">Manufacturing & Heavy Industry</option>
                        <option value="IT">IT, Tech & Services</option>
                        <option value="Healthcare">Healthcare & Clinical Networks</option>
                        <option value="Supply Chain">Supply Chain & Logistics</option>
                        <option value="Retail">Retail & Multi-site Outlets</option>
                        <option value="Other">Other Specialty Area</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Services dropdown options */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact_service" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                        Service of Interest
                      </label>
                      <select
                        id="contact_service"
                        name="contact_service"
                        value={form.serviceOfInterest}
                        onChange={(e) => setForm({ ...form, serviceOfInterest: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC] font-semibold text-slate-700"
                      >
                        <option value="General Inquiry">General Scoping Inquiry</option>
                        <option value="Business Excellence">Business Excellence System</option>
                        <option value="Cost Optimization">Cost Optimization Program</option>
                        <option value="Systems Excellence">Systems & Process Excellence</option>
                        <option value="HR Relations">HR & Industrial Relations</option>
                        <option value="Project Management">Project Management Office</option>
                        <option value="Throughput reduction">Throughput Time Reduction</option>
                        <option value="Innovation Transformation">Innovation & Transformation</option>
                      </select>
                    </div>

                    {/* Preferred contact mode radio toggle */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest block">
                        Preferred Response Method
                      </label>
                      <div className="flex items-center space-x-6 py-2">
                        <label className="inline-flex items-center space-x-2 text-xs text-slate-650 font-bold cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={form.preferredContact === 'email'}
                            onChange={() => setForm({ ...form, preferredContact: 'email' })}
                            className="text-[#0066CC] focus:ring-[#0066CC] h-4 w-4"
                          />
                          <span>Email Message</span>
                        </label>
                        <label className="inline-flex items-center space-x-2 text-xs text-slate-650 font-bold cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={form.preferredContact === 'phone'}
                            onChange={() => setForm({ ...form, preferredContact: 'phone' })}
                            className="text-[#0066CC] focus:ring-[#0066CC] h-4 w-4"
                          />
                          <span>Callback Call</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Scoping summary text requirements */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact_message" className="text-[10px] font-extrabold text-slate-500 font-mono uppercase tracking-widest">
                      Operational Scoping Summary *
                    </label>
                    <textarea
                      id="contact_message"
                      name="contact_message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="E.g. We seek to compress our raw shipping setups, shorten material inventories, or streamline team hand-offs..."
                      className={`w-full px-3 py-2 text-xs bg-slate-50 border rounded focus:outline-none focus:ring-1 transition-all font-semibold ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-[#0066CC] focus:border-[#0066CC]'
                      }`}
                    ></textarea>
                    {errors.message ? (
                      <p className="text-3xs font-semibold text-red-500 leading-none">{errors.message}</p>
                    ) : (
                      <p className="text-[10px] text-slate-400 font-mono italic">Please summarize current process speeds or bottleneck points.</p>
                    )}
                  </div>

                  <div className="pt-3">
                    <motion.button
                      type="submit"
                      id="scoping-submit-btn"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3 bg-[#FF6B35] hover:bg-[#e85a2a] disabled:bg-slate-400 text-white font-bold uppercase tracking-wider text-xs rounded transition-all duration-150 inline-flex items-center justify-center space-x-2 focus:outline-none cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Briefing Packet...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Request Scoping Consultation →</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Corporate Offices & Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-slate-800">
            
            {/* Direct addresses card */}
            <motion.div 
              id="office_locations"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-slate-50 border border-slate-200 rounded p-6 shadow-sm space-y-4 text-left cursor-default"
            >
              <h4 className="text-[10px] font-extrabold font-mono text-[#003366] uppercase tracking-widest border-b border-slate-200 pb-2">
                Corporate Headquarters
              </h4>
              <div className="space-y-3.5 text-xs font-semibold leading-relaxed">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4.5 w-4.5 text-[#0066CC] shrink-0 mt-0.5" />
                  <p className="text-slate-600">
                    <strong className="text-[#003366]">MAYNIT</strong><br />
                    Based in Ludhiana, Punjab<br />
                    Ludhiana, Punjab, India
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-4.5 w-4.5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs font-semibold leading-relaxed flex flex-col">
                    <a href="tel:+919872422589" className="text-[#003366] hover:underline">
                      +91 98724 22589
                    </a>
                    <a href="tel:+917069010057" className="text-[#003366] hover:underline">
                      +91 70690 10057
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Security Guarantee banner */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              whileHover={{ y: -2, backgroundColor: "rgba(236, 253, 245, 0.7)" }}
              className="p-4 bg-emerald-50 border border-emerald-200 rounded space-y-1.5 flex items-start space-x-3 text-left transition-colors duration-200 cursor-default"
            >
              <ShieldCheck className="h-5 w-5 text-[#28A745] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-extrabold text-[#003366] uppercase tracking-wide leading-none">Strict NDA Compliant</p>
                <p className="text-[10px] text-slate-500 mt-1.5 leading-normal font-semibold">
                  All shared financial files, workforce metrics, layout diagrams, and competitive configurations are strictly isolated under reciprocal corporate NDAs and data vaults.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 4: STEP-BY-STEP CONSULTATION PROCESS */}
      <section className="bg-slate-50 py-16 border-y border-slate-150 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xxs font-bold text-[#FF6B35] uppercase tracking-wider block">FLOW PROTOCOLS</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003366] tracking-tight">
              Our Consultation Lifecycle
            </h3>
            <p className="text-xs text-slate-500 leading-normal max-w-md mx-auto">
              Understand our precise chronological onboarding steps, ensuring minimal interruption to your daily frontline operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {consultationSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                id={`consultation-lifecycle-step-${step.step}`}
                whileHover={{ y: -5, scale: 1.015, borderColor: "#0066CC" }}
                transition={{ type: "spring", stiffness: 450, damping: 18 }}
                className="bg-white border border-slate-200 rounded p-5 shadow-sm space-y-3 relative flex flex-col justify-between text-left cursor-default"
              >
                <div className="space-y-2">
                  <div className="text-[9px] font-extrabold font-mono text-[#0066CC] uppercase tracking-widest">
                    Stage 0{step.step}
                  </div>
                  <h4 className="font-extrabold text-xs text-[#003366] leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
                
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400 bg-white border border-slate-150 p-0.5 rounded-full shadow-sm">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center p-4 bg-[#E6F3FF]/40 rounded border border-[#0066CC]/15 max-w-xl mx-auto text-[10px] font-mono font-bold uppercase tracking-wider text-[#003366] flex items-center justify-center space-x-2">
            <Calendar className="h-4 w-4 text-[#FF6B35]" />
            <span>Average Onboarding Target: Zero (0) to Scoping Diagnostic in Under Five (5) Business Days</span>
          </div>

        </div>
      </section>

    </div>
  );
}
