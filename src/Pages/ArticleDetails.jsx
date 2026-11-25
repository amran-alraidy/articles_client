import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ArticleDetails() {
    const [isLoading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(null);

    const [article, setArticle] = useState("");
    const { id } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                setIsloading(true)
                const response = await axios.get(`http://127.0.0.1:8000/api/getarticle/${id}`);
                setArticle(response.data.data)
            } catch (err) {
                setIsError("There is an Error unexpected");
            } finally {
                setIsloading(false);
            }
        }
        getData();
    }, [])

    if (isLoading) {
        return <p>Loading......</p>
    }

    if (isError) {
        return <p>{isError}</p>
    }

    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {article.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                {article.body}
            </p>
        </div>

    );
}
export default ArticleDetails;