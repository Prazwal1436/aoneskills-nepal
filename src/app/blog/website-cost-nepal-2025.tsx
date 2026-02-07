import { generateMetaTags } from "@/lib/seoConfig";
import Head from "next/head";

const meta = {
  title: "How much does a website cost in Nepal 2025 | AOne Skills",
  description: "Website cost Nepal 2025: Find out how much it costs to build a website in Nepal, price breakdown, and what affects pricing. Get a free quote!",
  keywords: "website cost Nepal 2025, how much does a website cost in Nepal, website price Nepal"
};

export default function WebsiteCostNepal2025() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <main>
        <h1>How much does a website cost in Nepal 2025?</h1>
        <p>Learn about website pricing in Nepal, what factors affect the cost, and how to get the best value for your business.</p>
        {/* Add detailed content and price breakdown here */}
      </main>
    </>
  );
}
