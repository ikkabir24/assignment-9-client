import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidCategory } from 'react-icons/bi';
import { FaFireAlt, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const SkillDetailsPage = () => {

    const skills = useLoaderData();
    const { id } = useParams();

    // state for a single skill
    const [skill, setSkill] = useState([]);

    useEffect(() => {
        const foundSkill = skills.find(singleSkill => singleSkill.skillId == id)
        setSkill(foundSkill)
    }, [])

    // form submission handle
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success('Session booked successfully!');
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* skill img */}
                <img
                    src={skill.image}
                    alt={skill.skillName}
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                    loading="lazy"
                />

                {/* skilll info */}
                <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{skill.skillName}</h2>
                        <p className="text-sm text-gray-600 mb-4">{skill.description}</p>

                        <div className="mb-4 flex gap-2">

                            <span className="inline-block text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
                                <div className='flex justify-center items-center gap-1'>
                                    <BiSolidCategory />
                                    <p>
                                        {skill.category}
                                    </p>
                                </div>
                            </span>

                            {skill.trending && <span className="inline-block text-sm text-white bg-red-500 px-3 py-1 rounded-full">
                                <div className='flex justify-center items-center gap-1'>
                                    <FaFireAlt />
                                    <p>Trending</p>
                                </div>
                            </span>
                            }
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold">Provider:</p>
                                <p>{skill.providerName}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Email:</p>
                                <p>{skill.providerEmail}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Price:</p>
                                <p>${skill.price} / session</p>
                            </div>
                            <div>
                                <p className="font-semibold">Rating:</p>
                                <div className='flex gap-1 items-center'>
                                    <FaStar/>
                                    <p className='font:semi-bold'>{skill.rating}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">Slots Available:</p>
                                <p>{skill.slotsAvailable}</p>
                            </div>
                        </div>
                    </div>

                    {/* form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Book a Session</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full mb-3 px-4 py-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full mb-3 px-4 py-2 border rounded"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SkillDetailsPage;