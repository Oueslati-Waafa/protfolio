import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
        setCertifications(data);
      });

  }, []);
  return (
    <>
         <h2 className="head-text">Certifications</h2> 
         <div className="app__certifications-container">
         <div className="app__certifications">
            {certifications.map((certifications)=> (
             <motion.div className="app__skills-exp-item" key={certifications.year}>
                <div className="app__skills-exp-year">
                <p className="bold-text">{certifications.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={certifications.name}
                  key={certifications.name}>

                  <h4 className="bold-text">{certifications.name}</h4>
                  <p className="p-text">{certifications.provider}</p>
                </motion.div>
              </motion.div>
             </motion.div> 
               

            ))

            } 
         </div>
         </div>
    </>
  )
}

export default Certifications