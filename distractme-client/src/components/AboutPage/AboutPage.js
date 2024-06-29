import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section>
        <h2>Motivation</h2>
        <p>I created distractMe during a particularly stressful time in my life when my mind 
          wouldn't stop racing. Traditional methods of managing anxiety, like deep breathing 
          and mindfulness, weren't always effective for me. I needed a way to divert my 
          thoughts and calm myself. distractMe is my solution to this problem, designed to 
          provide a quick mental break for anyone who needs it.</p>
      </section>
      <section>
        <h2>Purpose</h2>
        <p>distractMe is a full-stack web application designed to provide quick, engaging 
          distractions to help users manage mental health and anxiety. By offering random, 
          interesting facts, the app aims to shift users' focus away from stressors and 
          overwhelming thoughts, allowing them to regain a sense of calm and control.</p>
      </section>
      <section>
        <h2>Disclaimer</h2>
        <p>
          The facts provided are sourced from a third-party API, and I cannot guarantee that 
          all facts will be suitable for all ages or situations. Please use discretion when 
          viewing the content.<br />
          Please note that this app is not a replacement for professional medical advice or 
          treatment. For medical advice or treatment, please consult your healthcare provider.<br />
          If you need immediate assistance, you can contact the following hotlines:
        </p>
        <ul>
          <li>Canada: Mental Health Helpline 1-866-355-5550</li>
          <li>USA: Mental Health America 1-800-273-8255</li>
        </ul>
      </section>
      <section>
        <h2>Feedback</h2>
        <p>Your feedback is valuable to me. If you have any suggestions, encounter any 
          issues, or just want to share your thoughts, please feel free to reach out at 
          <a href="mailto:distractMe.ca@outlook.com">distractMe.ca@outlook.com</a>. 
          Together, we can make distractMe even better.</p>
      </section>
    </div>
  );
};

export default About;