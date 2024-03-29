import Link from "next/link";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
const Categories = ({ categories }) => {
  const router = useRouter();
  return (
    <div className={` p-8 mb-12 rounded-2xl  themeComponent`}>
      <div className="flex ">
        <ClipboardDocumentIcon className="w-6 h-6 mr-2" />
        <h1 className="mb-6 text-xl font-semibold ">ໝວດໝູ່</h1>
      </div>

      <div className="flex flex-wrap w-full gap-y-8 ">
        {categories?.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span
              className={`cursor-pointer p-2 rounded-full   mr-2 ${
                router.asPath === `/category/${category.slug}`
                  ? "  font-bold"
                  : ""
              }  hover:font-bold`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
