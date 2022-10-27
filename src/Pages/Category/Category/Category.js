import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSammaryCard from '../../Shared/NewsSammaryCard/NewsSammaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle("Category")
    return (
        <div>
            <h2>This Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSammaryCard
                key={news._id}
                news = {news}
                ></NewsSammaryCard>)
            }
        </div>
    );
};

export default Category;