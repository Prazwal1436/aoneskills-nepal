import { generateMetaTags } from "@/lib/seoConfig";
import Head from "next/head";

const meta = {
  title: "Product Photography + Social Ads — Damak Case Study | AOne Skills",
  description: "Case study: How product photography and social ads boosted e-commerce sales in Damak. Real results from AOne Skills clients.",
  keywords: "product photography ecommerce Nepal, product photos that sell Nepal"
};

export default function ProductPhotographyCaseStudy() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <main>
        <h1>Product Photography + Social Ads — Damak Case Study</h1>
        <p>Discover how professional product photography and targeted social ads increased sales for a Damak-based e-commerce business.</p>
        {/* Add detailed case study content here */}
      </main>
    </>
  );
}
