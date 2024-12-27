import { useState } from "react";
import images from "../public/images.json"; 
import ImageGrid from "../components/ImageGrid";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [filteredImages, setFilteredImages] = useState(images || []); // Assurez-vous que images est initialisé correctement

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = images.filter((image) =>
      image.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredImages(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={filteredImages} />
    </div>
  );
};

export default HomePage;
