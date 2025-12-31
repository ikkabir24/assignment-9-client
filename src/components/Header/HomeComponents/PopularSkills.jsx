import React from 'react';
import SkillCard from './SkillCard';

const PopularSkills = ({ skillsList }) => {

    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-5'>Popular Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:p-10'>
                {
                    skillsList.map(skill => <SkillCard
                    key={skill.skillId}
                    skill={skill}
                    ></SkillCard>)
                }
            </div>
        </div>
    );
};

export default PopularSkills;