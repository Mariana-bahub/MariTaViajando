type DestinationCardProps = {
  title: string;
  image: string;
  description?: string;
};


export default function DestinationCard({
  title,
  image,
  description,
}: DestinationCardProps) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">


      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />


      <div className="p-6">


        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>


        {description && (
          <p className="text-gray-600">
            {description}
          </p>
        )}


        <button
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Ver detalhes
        </button>


      </div>


    </div>
  );
}
