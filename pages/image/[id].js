import images from "../../public/images.json";

export async function getStaticPaths() {
  const paths = images.map((image) => ({
    params: { id: image.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const image = images.find((img) => img.id === parseInt(params.id, 10));
  return { props: { image } };
}

const ImageDetail = ({ image }) => {
  if (!image) {
    return <div>Image non trouvée</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1>{image.title}</h1>
      <img src={image.url} alt={image.title} width={800} height={500} />
      <p>{image.description}</p>
      <a href="/" className="text-blue-500">
        Retour
      </a>
    </div>
  );
};

export default ImageDetail;
