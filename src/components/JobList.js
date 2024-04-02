import data from "../data/data.json";
import Job from "./Job";

export default function JobList() {
  return (
    <section className="list-container">
      {data.map((item) => (
        <Job job={item} />
      ))}
    </section>
  );
}
