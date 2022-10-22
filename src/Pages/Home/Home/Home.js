import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSammaryCard from '../../Shared/NewsSammaryCard/NewsSammaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Dragon news Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSammaryCard
                key={news._id}
                news ={news}
                ></NewsSammaryCard>)
            }
        </div>
    );
};

export default Home;