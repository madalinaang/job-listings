import Pill from "./Pill";
import Filter from "./Filter";

export default function Job({ job }) {
  return (
    <article className={"job-card " + (job.featured && "featured")}>
      <div className="logo-section">
        <img className="logo-img" src={process.env.PUBLIC_URL + job.logo} />
      </div>
      <div className="details-section">
        <div className="company-pills">
          <p className="company-name">{job.company}</p>
          <div className="pills">
            {job.new && <Pill text="NEW!" />}
            {job.featured && <Pill text="FEATURED" dark />}
          </div>
        </div>
        <p className="job-position">{job.position}</p>
        <div className="more-details">
          <p>{job.postedAt}</p>
          <p>&#8226;</p>
          <p>{job.contract}</p>
          <p>&#8226;</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="categories-section">
        <Filter text={job.role} />
        <Filter text={job.level} />
        {job.languages.map((lang) => (
          <Filter text={lang} />
        ))}
        {job.tools.map((lang) => (
          <Filter text={lang} />
        ))}
      </div>
    </article>
  );
}
