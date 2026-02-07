import { generateMetaTags } from "@/lib/seoConfig";
import Head from "next/head";

const meta = {
  title: "How to Choose an App Developer in Nepal | AOne Skills",
  description: "Hire mobile app developer Nepal: Checklist for choosing the best app developer in Nepal. What to look for, questions to ask, and tips for success.",
  keywords: "hire mobile app developer Nepal, mobile app developer checklist Nepal"
};

export default function HowToChooseAppDeveloperNepal() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <main>
        <h1>How to Choose an App Developer in Nepal</h1>
        <p>Find out how to select the right mobile app developer for your project in Nepal. Get a checklist and expert tips.</p>
        {/* Add detailed checklist and guidance here */}
      </main>
    </>
  );
}
