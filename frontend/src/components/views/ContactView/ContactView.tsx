import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactBox,
  ContactBtn,
  ContactContainer,
  ContactForm,
  ContactHeader,
  ContactInput,
  ContactInputContianer,
  ContactText,
} from './ContactView.styles';
import { BackgroundText } from '../../modules/BackgroundText';

export const ContactView: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_oxmbelu',
        'template_n3u40r6',
        formRef.current,
        'J3pM14NfPn5Y33VZk',
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 3000); // znika po 3s
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  return (
    <>
      <ContactContainer id="contact">
        <BackgroundText>Contact</BackgroundText>
        <ContactBox>
          <ContactHeader>
            Contact <span>me</span>
          </ContactHeader>
          <ContactForm ref={formRef} onSubmit={sendEmail}>
            <ContactInputContianer>
              <ContactInput
                type="text"
                name="from_name"
                placeholder="Your name"
                required
              />
              <ContactInput
                type="email"
                name="from_email"
                placeholder="Your email"
                required
              />
            </ContactInputContianer>
            <ContactText name="message" placeholder="Your message" required />
            <ContactBtn type="submit">Send</ContactBtn>
            {success && <p>Message sent!</p>}
          </ContactForm>
        </ContactBox>
      </ContactContainer>
    </>
  );
};
