export default function SizeChart() {
  const sizes = {
    UK: [18, 20, 22, 24, 26],
    European: [46, 48, 50, 52, 54],
    USA: [14, 16, 18, 20, 22],
    Australia: [28, 10, 12, 14, 16],
    Canada: [24, 18, 14, 42, 36],
  };

  const sizeKeys = Object.keys(sizes) as (keyof typeof sizes)[];

  return (
    <div className="w-full max-w-6xl mx-auto py-24">
      <h2 className="text-3xl  font-bold [var(--font-family)] mb-4">
        Size Chart
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 ">
          <tbody>
            {sizeKeys.map((region) => (
              <tr key={region} className="hover:bg-gray-50">
                <td className="px-4 py-3 border font-lato light text-sm border-gray-300  ">
                  {region}
                </td>
                {sizes[region].map((val, idx) => (
                  <td
                    key={idx}
                    className="px-4 py-2 border border-gray-300  font-lato light text-sm"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
