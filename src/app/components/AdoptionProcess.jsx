

const AdoptionProcess = () => {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Simple Adoption Process</h2>

          <p className="mt-4 text-green-100"> Follow these easy steps to adopt your new best friend.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="text-5xl font-bold">01</div>

            <h3 className="text-2xl font-semibold mt-5">Browse Pets</h3>

            <p className="mt-4 text-green-100">Explore available pets and choose your perfect companion.</p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold">02</div>

            <h3 className="text-2xl font-semibold mt-5">Submit Request</h3>

            <p className="mt-4 text-green-100">Fill out the adoption form and wait for approval.</p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold">03</div>

            <h3 className="text-2xl font-semibold mt-5">Bring Home</h3>

            <p className="mt-4 text-green-100">Meet your pet and welcome them into your family.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;