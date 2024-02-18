import NewsItem from "./NewsItem";
import { useEffect } from "react";
import { useState } from "react";
import '../assets/NavBar.css';

const NewsBoard = ({category}) => {
    console.log("NewsBoard component rendering with category:", category);
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(resp=>resp.json()).then(data=>setArticles(data.articles))
          
    },[category])

  return (
    <div>
      <div>
      <h2 className="text-center title"><span className="badge">{category}</span></h2>
        <h2 className="text-center"> Latest <span className="badge bg-danger">News</span></h2>
        
      </div>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
