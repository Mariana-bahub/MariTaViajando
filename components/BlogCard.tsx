import Link from "next/link";


type BlogCardProps = {
  title: string;
  image: string;
  description: string;
  slug?: string;
};


export default function BlogCard({
  title,
  image,
  description,
  slug,
}: BlogCardProps) {

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">


      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />


      <div className="p-6">


        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>


        <p className="text-gray-600 mb-5">
          {description}
        </p>


        {slug && (

          <Link
            href={`/blog/${slug}`}
            className="text-blue-600 font-semibold"
          >
            Ler artigo →
          </Link>

        )}


      </div>


    </article>
  );
}
