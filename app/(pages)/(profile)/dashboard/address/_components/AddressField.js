import cities from "@/address/cities.json";
import upazilas from "@/address/upazilas.json";
export default function AddressField({ mode, address }) {
  let mapItem;
  if (mode === "city") {
    mapItem = cities;
  } else {
    mapItem = upazilas;
  }
  return (
    <div className="form-control">
      <label htmlFor={`${mode === "city" ? "city" : "area"}`}>
        {mode === "city" ? "City" : "Area"}
      </label>
      <select
        name={`${mode === "city" ? "city" : "area"}`}
        className="bg-transparent border p-2 rounded mt-2"
      >
        {cities &&
          mapItem.map((city) => (
            <option className="!bg-secondary" key={city?.id} value={city?.name}>
              {city?.name}
            </option>
          ))}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svg lucide lucide-info"
      >
        <circle cx={12} cy={12} r={10} />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </div>
  );
}
