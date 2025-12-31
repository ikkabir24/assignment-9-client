import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SkillCard = ({ skill }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
                src={skill.image}
                alt={skill.skillName}
                loading="lazy"
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-base font-semibold mb-1 truncate">{skill.skillName}</h3>
                <p className="text-sm text-gray-600 mb-2 truncate">By {skill.providerName}</p>
                <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-green-600 font-medium">${skill.price}</span>
                    <div className="text-yellow-500 flex items-center gap-1">
                        <FaStar/>
                        <span className='font-semibold'>{skill.rating}</span>
                    </div>
                </div>
                <Link to={`/details/${skill.skillId}`}>
                <button
                    className="w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition duration-200">
                    View Details
                </button></Link>
            </div>
        </div>

    );
};

export default SkillCard;