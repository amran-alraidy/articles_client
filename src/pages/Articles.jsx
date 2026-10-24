import { useEffect, useState } from 'react';
import ArticleCard from '../Componnents/ArticleCard'
import axios from 'axios';

function Articles() {

  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const [articles, setArticle] = useState([]);

 

      useEffect(()=>{
       async function getData(){
          try{
            setIsloading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setArticle(response.data);
          }catch(err){
            setIsError("There is an Error unexpected");
          }finally{
            setIsloading(false);
          }
        }
        getData();
      },[])

      if(isLoading){
        return <p>Loading......</p>
      }

      if(isError){
        return <p>{isError}</p>
      }


  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Articles</h1>
        <p className="text-gray-500">Explore our collection of essays, thoughts, and technical writings.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.body}
          />
        ))}
      </div>
    </div>
  )
}

export default Articles;