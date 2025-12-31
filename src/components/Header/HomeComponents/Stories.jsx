import React from 'react';

const Stories = () => {

    const stories = [
        {
            name: "Rafiul Islam",
            skill: "Spoken English",
            feedback: "SkillSwap helped me speak confidently in interviews. The provider was super friendly!",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQFunvgLsPz3ng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697150808335?e=2147483647&v=beta&t=eQ_pVeVqIMBWXSBJk8lIM45k1OEjIjWkmd-wZ5JV4uc"
        },
        {
            name: "Tanisha Ahmed",
            skill: "Guitar Basics",
            feedback: "I always wanted to play guitar. Now I can play my favorite songs thanks to Alex!",
            image: "https://media.licdn.com/dms/image/v2/D5603AQEzdSATbz787g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727417812630?e=2147483647&v=beta&t=svB_FPGZxGpgxu7-dl2Onvv4iXZNh_rPdfBjgZbXOz8"
        },
        {
            name: "Mehedi Hasan",
            skill: "Python Automation",
            feedback: "I automated my daily tasks at work after just 3 sessions. Highly recommended!",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQG3aYjY09IuQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720706216748?e=2147483647&v=beta&t=gMUK0k4QP9T78ahx9bEmrqyIKsuYhQM7r2ikLFMX5i4"
        },
        {
            name: "Kabir Hasan",
            skill: "Frontend Web Development",
            feedback: "It was a pleasure to learn a lot of new things.",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQECIDEggRUWyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695439356780?e=2147483647&v=beta&t=MPa2QSsBCjB_KzSWmhlPzgCanYTmdDAfwq2ffNvz5Os"
        },
    ];


    return (
        <section className="bg-gradient-to-t from-black to-gray-700 py-12 px-4 md:px-8" id="success-stories">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">SkillSwap Success Stories</h2>
                <p className="mb-10 text-white">
                    Real learners. Real impact. See how SkillSwap is changing lives in your community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={story.image}
                                alt={story.name}
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
                            />
                            <h3 className="text-lg font-semibold">{story.name}</h3>
                            <p className="text-sm text-blue-600 mb-2">Skill: {story.skill}</p>
                            <p className="text-sm text-gray-700 italic">“{story.feedback}”</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Stories;