import React from 'react';

// рендерит секцию с заголовком и детей (children)
const Section = ({ title, children }) => (
  <section className="title">
    {title}
    {children}
  </section>
);

export default Section;
