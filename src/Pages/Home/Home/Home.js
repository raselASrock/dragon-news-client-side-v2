import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSammaryCard from '../../Shared/NewsSammaryCard/NewsSammaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home')
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