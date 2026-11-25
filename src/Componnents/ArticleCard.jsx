import { Link } from "react-router";

function ArticleCard({id, title, body, onDelete }) {

  const handleDelete = () => {
     const confirmed = confirm("Are you sure to delete this article ?");
     if(!confirmed) return;
     onDelete(id);

  }


  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between">
      <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
        {title}
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
        {body}
      </p>

      <hr className="border-gray-100 mb-4" />

      <div className="flex items-center justify-between">
        <Link
          to={`/articles/${id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Read full article
        </Link>

        <button
        onClick={handleDelete}
          className="flex items-center gap-1 text-red-500 border border-red-200 rounded-md px-3 py-1 text-sm hover:bg-red-50 transition-colors"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  )
}

export default ArticleCard;