import TotumEnterprisesLayout from "../components/Layout";

export default function Podcast() {
  return (
    <TotumEnterprisesLayout page="podcast">
      <section className="section-gradient theme-podcast py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Totum Podcast</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Conversations that inspire, educate, and challenge perspectives.
        </p>
      </section>
    </TotumEnterprisesLayout>
  );
}
