import React from 'react';
import TopProvider from './TopProvider';

const TopProviders = ({topProviders}) => {

    return (
        <div>
            <h1 className='font-bold text-3xl text-center mt-5 pb-3'>Our Top Providers</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8 lg:p-10'>
                {
                    topProviders.map(provider => <TopProvider
                    key={provider.skillId}
                    provider={provider}
                    ></TopProvider>)
                }
            </div>
        </div>
    );
};

export default TopProviders;