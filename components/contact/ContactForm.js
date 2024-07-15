import {useEffect, useState} from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notificationStatus, setNotificationStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (event) => {
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (notificationStatus !== 'pending') {
      const timer = setTimeout(() => {
        setNotificationStatus(null);
        setErrorMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notificationStatus]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setNotificationStatus('pending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setNotificationStatus('success');
      setFormData({name: '', email: '', message: ''});
    } catch (error) {
      setErrorMessage(error.message);
      setNotificationStatus('error');
    }
  };

  let notification;

  if (notificationStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message..',
      message: 'Your message is on its way',
    };
  }

  if (notificationStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Your message sent successfully',
    };
  }

  if (notificationStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: errorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              type='email'
              name='email'
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              type='text'
              name='name'
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name='message'
            rows={5}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </section>
  );
};

export default ContactForm;
