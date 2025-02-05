export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-500">
          Tokenomics
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Token Distribution
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>60% - Public Sale</li>
              <li>10% - Team and Development</li>
              <li>15% - Marketing and Partnerships</li>
              <li>10% - Community Rewards</li>
              <li>5% - Charity</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Token Features
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Total Supply: 1,000,000,000 PEPEF</li>
              <li>
                0.25% Transaction Fee (0.125% Burned, 0.125% Redistributed)
              </li>
              <li>Deflationary Mechanism</li>
              <li>Community Governance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

