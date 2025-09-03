import TotumEnterprisesLayout from "../components/Layout";

export default function Finance() {
  return (
    <TotumEnterprisesLayout page="finance">
      <section className="section-gradient theme-finance py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Totum Finance</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Building financial literacy, wealth management, and economic
          empowerment.
        </p>
      </section>
    </TotumEnterprisesLayout>
  );
}
