import React, { useEffect, useState } from 'react';
import HeroSwiper from '../components/Header/HomeComponents/HeroSwiper';
import { useLoaderData } from 'react-router';
import PopularSkills from '../components/Header/HomeComponents/PopularSkills';
import TopProviders from '../components/Header/HomeComponents/TopProviders';
import HowItWorks from '../components/Header/HomeComponents/HowItWorks';
import Stories from '../components/Header/HomeComponents/Stories';

const Home = () => {

    const data = useLoaderData();

    // state for all skills
    const [skillsList, setSkillsList] = useState([]);
    // state for popular data
    const [popularData, setPopularData] = useState([]);
    // state for top providers
    const [topProviders, setTopProviders] = useState([]);

    useEffect(()=>{
        setSkillsList(data);

        const filteredData = data.filter(sData => sData.trending === true);
        setPopularData(filteredData);

        const filteredProvider = data.filter(sData => sData.top_provider === true);
        setTopProviders(filteredProvider);
    }, [data]);


    return (
        <div className='bg-base-200'>

            {/* main section */}
            <HeroSwiper
            popularData={popularData}
            ></HeroSwiper>

            <PopularSkills
            skillsList={skillsList}
            ></PopularSkills>

            <TopProviders topProviders={topProviders}></TopProviders>
            <HowItWorks></HowItWorks>

            <Stories></Stories>
        </div>
    );
};

export default Home;