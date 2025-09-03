import TotumEnterprisesLayout from "../components/Layout";

export default function Home() {
  return (
    <TotumEnterprisesLayout page="enterprises">
      <section className="section-gradient theme-enterprises py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Totum Enterprises</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering innovation, excellence, and opportunity across industries
          worldwide.
        </p>
      </section>
    </TotumEnterprisesLayout>
  );
}
