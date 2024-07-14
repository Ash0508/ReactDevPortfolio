import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Snackbar } from "@mui/material";
import env from "../env";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer; 
`;

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
  
    if (!formData.from_name || !formData.reply_to || !formData.message || !formData.subject) {
      setNotDone(true);
    } else {
      const formDataObj = new FormData(form.current);
      formDataObj.append('service_id', env.REACT_APP_EMAILJS_SERVICE_ID);
      formDataObj.append('template_id', env.REACT_APP_EMAILJS_TEMPLATE_ID);
      formDataObj.append('user_id', env.REACT_APP_EMAILJS_USER_ID);
  
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
          method: 'POST',
          body: formDataObj,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          setDone(true);
          setNotDone(false);
          setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
        } else {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          setNotDone(true);
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setNotDone(true);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactInput
            type="email"
            name="reply_to"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.reply_to}
            required
          />
          <ContactInput
            type="text"
            name="from_name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.from_name}
            required
          />
          <ContactInput
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            value={formData.subject}
            required
          />
          <ContactInputMessage
            name="message"
            placeholder="Message"
            rows="4"
            onChange={handleChange}
            value={formData.message}
            required
          />

          <ContactButton type="submit" value="Send" disabled={done} />
          <span className="done">
            {done &&
              "Thanks for contacting me. I have received your mail. If you are testing this functionality, it is working perfectly fine. If you have any serious query, I will reply. Also, you can contact me on LinkedIn."}
          </span>
        </ContactForm>
        <Snackbar
          open={done}
          autoHideDuration={6000}
          onClose={() => setDone(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
