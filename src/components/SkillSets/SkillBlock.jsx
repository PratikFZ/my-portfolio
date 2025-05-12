import React from 'react';
import './SkillBlock.css';
import { motion } from 'framer-motion';

const SkillBlock = ({ skill }) => {
    return (
        <motion.div 
            className="skill-card"
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px 5px var(--accent-color)" }}>
            <span style={{fontSize: "40px"}}>{skill.icon}</span>
            <p style={{ fontSize: '15px' }}>{skill.name}</p>
        </motion.div>
    );
};

export default SkillBlock;