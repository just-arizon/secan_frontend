import { registrationFee, annualDues } from "@/data/membership";

export default function Apply() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        Apply for Membership
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed mb-10">
        Complete the online membership application and become part of a vibrant
        community committed to advancing anatomical sciences in Nigeria and
        beyond.
      </p>

      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href="mailto:secretariat@secan.org.ng?subject=Membership Application"
          className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded transition"
        >
          Apply for Membership
        </a>
        <a
          href="mailto:secretariat@secan.org.ng?subject=Membership Renewal"
          className="border border-green-700 text-green-700 hover:bg-green-50 text-sm font-semibold px-5 py-2.5 rounded transition"
        >
          Renew Membership
        </a>
      </div>

      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-lg font-bold text-green-700 uppercase mb-4">
          Registration &amp; Annual Dues
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          SECAN membership is subject to a one-time registration fee and annual
          membership dues in accordance with the Society's Constitution.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Registration Fee — {registrationFee.amount}
          </p>
          <p className="text-xs text-gray-500">{registrationFee.note}</p>
        </div>

        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden mb-6">
          <thead>
            <tr className="bg-green-700 text-white text-left">
              <th className="px-4 py-2.5 font-semibold">Membership Category</th>
              <th className="px-4 py-2.5 font-semibold">Annual Dues</th>
            </tr>
          </thead>
          <tbody>
            {annualDues.map((row, i) => (
              <tr
                key={row.category}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2.5 text-gray-700">{row.category}</td>
                <td className="px-4 py-2.5 text-gray-700">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xs text-gray-400 leading-relaxed">
          Annual dues are payable at the beginning of each calendar year and are
          subject to review and approval by the Society in accordance with the
          SECAN Constitution. Payments should be made through official SECAN
          payment channels — details are provided during the application or
          renewal process. For enquiries, please contact the secretariat.
        </p>
      </div>
    </div>
  );
}
