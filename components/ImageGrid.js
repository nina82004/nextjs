// components/ImageGrid.js
import Link from "next/link";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>Aucune image trouvée</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image) => (
        <Link key={image.id} href={`/image/${image.id}`}>
          <Image
            src={image.url}
            alt={image.title}
            width={200}
            height={200}
            className="rounded shadow hover:scale-105 transition-transform"
          />
          <p className="text-center">{image.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ImageGrid;
