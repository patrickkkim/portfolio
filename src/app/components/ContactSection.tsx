import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale, SiteCopy } from '../i18n';

interface ContactSectionProps {
  locale: Locale;
  copy: SiteCopy['contactSection'];
}

export function ContactSection({ locale, copy }: ContactSectionProps) {
  const isKorean = locale === 'kr';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const contactEmail = 'patkim97@gmail.com';
  const modalCopy = useMemo(
    () =>
      isKorean
        ? {
            title: '이메일로 문의하기',
            description: '아래 폼을 작성하면 메시지가 바로 전달됩니다.',
            nameLabel: '이름',
            emailLabel: '이메일',
            subjectLabel: '제목',
            messageLabel: '내용',
            namePlaceholder: '이름을 입력해주세요',
            emailPlaceholder: '답변받을 이메일 주소',
            subjectPlaceholder: '문의 제목',
            messagePlaceholder: '프로젝트 내용, 일정, 예산 등을 자유롭게 작성해주세요',
            send: '전송하기',
            sending: '전송 중...',
            success: '전송 완료되었습니다. 빠르게 확인 후 답장드릴게요.',
            error: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
            redirectLabel: '모든 문의는 아래 이메일로 전달됩니다.',
            close: '닫기'
          }
        : {
            title: 'Contact via Email',
            description: 'Fill out the form below and your message will be sent directly.',
            nameLabel: 'Name',
            emailLabel: 'Email',
            subjectLabel: 'Subject',
            messageLabel: 'Message',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'Your email address',
            subjectPlaceholder: 'What is this about?',
            messagePlaceholder: 'Share your project scope, timeline, and budget.',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully. I will get back to you soon.',
            error: 'Failed to send. Please try again in a moment.',
            redirectLabel: 'All inquiries from this website are forwarded to:',
            close: 'Close'
          },
    [isKorean]
  );

  const handleChange = (field: 'name' | 'email' | 'subject' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitState('error');
      setSubmitError(modalCopy.error);
      return;
    }

    setSubmitState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || modalCopy.error);
      }

      setSubmitState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitState('error');
      setSubmitError(error instanceof Error ? error.message : modalCopy.error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitState('idle');
    setSubmitError('');
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="contact" className="relative z-40 -mt-10 rounded-t-[40px] bg-[#111111] px-4 py-24 text-[#FFFBF5] md:px-8">
      <div className="mx-auto max-w-[90vw]">
        <div className="rounded-[32px] border border-[#333] bg-[#181818] p-7 md:p-10">
          <p className={`mb-4 text-sm font-bold text-[#B2FF59] ${isKorean ? 'tracking-normal' : 'tracking-widest uppercase'}`}>{copy.sectionTitle}</p>
          <h2 className={`max-w-4xl text-4xl font-black md:text-7xl ${isKorean ? 'leading-[1.08] tracking-[-0.01em] break-keep' : 'leading-[0.95] tracking-tighter'}`}>{copy.headline}</h2>
          <p className={`mt-6 max-w-3xl text-lg text-[#E8E3D8] ${isKorean ? 'break-keep leading-[1.7]' : 'leading-relaxed'}`}>{copy.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-[#FF5C28] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              {copy.primaryCta}
            </button>
          </div>
        </div>
      </div>

      {typeof document !== 'undefined'
        ? createPortal(
        <AnimatePresence>
          {isModalOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/65 px-4 py-6 md:items-center md:py-8"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="max-h-[calc(100vh-3rem)] w-full max-w-xl overflow-y-auto rounded-[28px] border-2 border-black bg-[#FFFBF5] p-6 text-[#111111] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:p-8"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 id="contact-modal-title" className="text-3xl font-black">
                  {modalCopy.title}
                </h3>
                <p className={`mt-2 text-base text-[#2A2A2A] ${isKorean ? 'break-keep leading-relaxed' : 'leading-relaxed'}`}>{modalCopy.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border-2 border-black px-3 py-1 text-xs font-bold hover:bg-[#111111] hover:text-[#FFFBF5]"
              >
                {modalCopy.close}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className={`mb-1 block text-xs font-bold opacity-60 ${isKorean ? 'tracking-normal' : 'uppercase tracking-widest'}`}>{modalCopy.nameLabel}</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    placeholder={modalCopy.namePlaceholder}
                    className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-medium outline-none focus:border-[#FF5C28]"
                    required
                  />
                </label>
                <label className="block">
                  <span className={`mb-1 block text-xs font-bold opacity-60 ${isKorean ? 'tracking-normal' : 'uppercase tracking-widest'}`}>{modalCopy.emailLabel}</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    placeholder={modalCopy.emailPlaceholder}
                    className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-medium outline-none focus:border-[#FF5C28]"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className={`mb-1 block text-xs font-bold opacity-60 ${isKorean ? 'tracking-normal' : 'uppercase tracking-widest'}`}>{modalCopy.subjectLabel}</span>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(event) => handleChange('subject', event.target.value)}
                  placeholder={modalCopy.subjectPlaceholder}
                  className="w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-medium outline-none focus:border-[#FF5C28]"
                  required
                />
              </label>

              <label className="block">
                <span className={`mb-1 block text-xs font-bold opacity-60 ${isKorean ? 'tracking-normal' : 'uppercase tracking-widest'}`}>{modalCopy.messageLabel}</span>
                <textarea
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  placeholder={modalCopy.messagePlaceholder}
                  rows={5}
                  className="w-full resize-none rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-medium outline-none focus:border-[#FF5C28]"
                  required
                />
              </label>

              <div className="rounded-2xl border-2 border-black bg-white px-4 py-3">
                <p className={`text-xs font-bold opacity-60 ${isKorean ? 'tracking-normal' : 'uppercase tracking-widest'}`}>{modalCopy.redirectLabel}</p>
                <p className="mt-1 text-lg font-black">{contactEmail}</p>
              </div>

              {submitState === 'success' ? <p className="text-sm font-bold text-[#168038]">{modalCopy.success}</p> : null}
              {submitState === 'error' ? <p className="text-sm font-bold text-[#C01818]">{submitError || modalCopy.error}</p> : null}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="rounded-full bg-[#FF5C28] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'submitting' ? modalCopy.sending : modalCopy.send}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
          ) : null}
        </AnimatePresence>
          , document.body)
        : null}
    </section>
  );
}
