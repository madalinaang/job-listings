import { useState, useEffect } from "react";
import data from "../data/data.json";
import Job from "./Job";
import SearchBar from "./SearchBar";

export default function JobList() {
  const [jobList, setJobList] = useState(data);
  const [filterList, setFilterList] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);

  const addToFilterList = (str) => {
    filterList.indexOf(str) < 0 &&
      setFilterList((prevState) => [...prevState, str]);
  };

  const removeFromFilterList = (str) => {
    const updatedList = filterList.filter((item) => item !== str);
    setFilterList(updatedList);
  };

  const clearFilterList = () => {
    setFilterList([]);
  };

  useEffect(() => {
    setSearchVisible(filterList.length > 0);

    setJobList(data);

    if (filterList.length > 0) {
      const filteredJobs = [];
      data.forEach((job) => {
        const jobKeyWords = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        if (filterList.every((el) => jobKeyWords.includes(el))) {
          filteredJobs.push(job);
        }
      });

      setJobList(filteredJobs);
    }
  }, [filterList]);

  return (
    <section className="list-container">
      {searchVisible && (
        <SearchBar
          filters={filterList}
          removeFilter={removeFromFilterList}
          clearFilters={clearFilterList}
        />
      )}
      {jobList.map((item) => (
        <Job job={item} addFilter={addToFilterList} />
      ))}
    </section>
  );
}
