import React from 'react';

const TopProvider = ({ provider }) => {
    
    return (
        <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300">
            <img
                src={provider.provider_img}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="text-lg font-semibold">{provider.providerName}</h3>
            <p className="text-sm text-gray-500">{provider.providerEmail}</p>
            <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                Top Provider
            </span>
        </div>

    );
};

export default TopProvider;