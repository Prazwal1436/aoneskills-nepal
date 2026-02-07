import { generateMetaTags } from "@/lib/seoConfig";
import Head from "next/head";

const meta = generateMetaTags("damak-city");

export default function DamakPage() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <main>
        <h1>Website Company in Damak</h1>
        <p>Top web development company in Damak. Affordable business websites, product photography & local SEO. Contact +977-9842747572.</p>
        {/* Add more unique content for Damak here */}
      </main>
    </>
  );
}
