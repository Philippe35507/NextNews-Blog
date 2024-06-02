import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  console.log(filter);
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
