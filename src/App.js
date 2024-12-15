// Import necessary modules
import axios from "axios";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  // State for search inputs, book data, available languages, and loading/error indicators
  const [titleQuery, setTitleQuery] = useState("");
  const [authorQuery, setAuthorQuery] = useState("");
  const [languageQuery, setLanguageQuery] = useState("");
  const [languages, setLanguages] = useState([]);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch available languages on component mount
  useEffect(() => {
    setLanguages([
      { code: "yid", name: "Yiddish" },
      { code: "dut", name: "Dutch" },
      { code: "pol", name: "Polish" },
      { code: "spa", name: "Spanish" },
      { code: "heb", name: "Hebrew" },
      { code: "jpn", name: "Japanese" },
      { code: "hun", name: "Hungarian" },
      { code: "ita", name: "Italian" },
      { code: "tur", name: "Turkish" },
      { code: "fre", name: "French" },
      { code: "per", name: "Persian" },
      { code: "eng", name: "English" },
      { code: "fao", name: "Faroese" },
      { code: "ger", name: "German" },
      { code: "chi", name: "Chinese" },
    ]);
  }, []);

  // Function to fetch books based on the search query
  const fetchBooks = async () => {
    if (!titleQuery && !authorQuery && !languageQuery) return;
    setIsLoading(true);
    setError(null);

    const queries = [];
    if (titleQuery) queries.push(`title=${encodeURIComponent(titleQuery)}`);
    if (authorQuery) queries.push(`author=${encodeURIComponent(authorQuery)}`);
    if (languageQuery)
      queries.push(`language=${encodeURIComponent(languageQuery)}`);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?${queries.join("&")}`
      );
      setBooks(response.data.docs);
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-md text-center mb-8 tracking-wide">
          Book Finder{" "}
          <span role="img" aria-label="books">
            📚
          </span>
        </h1>

        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Search by Title */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute left-3 top-3 text-gray-400">🔍</div>
            </div>

            {/* Search by Author */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by author"
                value={authorQuery}
                onChange={(e) => setAuthorQuery(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute left-3 top-3 text-gray-400">🖊️</div>
            </div>

            {/* Search by Language */}
            <select
              value={languageQuery}
              onChange={(e) => setLanguageQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Language</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={fetchBooks}
            className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center my-6">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Book Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.key}
              className="bg-gradient-to-br from-white to-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
            >
              {/* Book Cover */}
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-60 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-200">
                  <span className="text-gray-500 text-sm">
                    📚 No Cover Available
                  </span>
                </div>
              )}

              {/* Book Details */}
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold text-blue-700">
                  {book.title}
                </h2>
                <p className="text-sm font-medium text-gray-600">
                  By {book.author_name?.join(", ") || "Unknown Author"}
                </p>
                <p className="text-sm text-gray-500 italic">
                  First Published: {book.first_publish_year || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {!isLoading &&
          books.length === 0 &&
          (titleQuery || authorQuery || languageQuery) && (
            <p className="text-center text-gray-600 mt-6">
              No books found for your search criteria.
            </p>
          )}
      </div>
    </div>
  );
};

export default App;
