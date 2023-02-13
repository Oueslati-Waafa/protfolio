import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Certifications.scss';
import { urlFor, client } from '../../client';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);

  certifications.sort((a, b) => (a.year < b.year) ? 1 : -1)

  return (
    <>
      <h2 className="head-text">Certifications</h2>

      <div className="app__certification ">
        {certifications.map((certification, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__certification-item"
            key={certification.name + index}
          >
            <img src={urlFor(certification.imgUrl)} alt={certification.name} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{certification.name}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{certification.year} | {certification.provider}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'),
  'certifications',
  'app__whitebg',
);