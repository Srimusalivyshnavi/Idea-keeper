import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectFirestore } from "../firebase/Config";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newTag, setNewTag] = useState(""); 
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, description, category, author, tags }; // Corrected object syntax
    try {
      await projectFirestore.collection("ideas").add(doc);
      navigate("/");
    } catch (err) {
      console.error("Error adding document: ", err); // Corrected console.log to console.error
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim() !== "") {
      setTags([...tags, newTag]); 
      setNewTag("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            <span>Idea Title:</span>
          </label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1">
            <span>Description:</span>
          </label>
          <textarea
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="newTag" className="block mb-1">
            <span>Add Tag:</span>
          </label>
          <div className="flex">
            <input
              type="text"
              id="newTag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddTag}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1">
            <span>Tags:</span>
          </label>
          <ul className="border border-gray-300 rounded px-3 py-2">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <label htmlFor="category" className="block mb-1">
            <span>Category:</span>
          </label>
          <input
            type="text"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        

        <div>
          <label htmlFor="author" className="block mb-1">
            <span>Author:</span>
          </label>
          <input
            type="text"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Create;