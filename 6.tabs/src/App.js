import "./App.css";
import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const jobResult = await response.json();
    setJobs(jobResult);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main className="loading">
        <h1>Loading...</h1>
      </main>
    );
  }
  const { company, duties, dates, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${value === index && "active"}`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <h6>{dates}</h6>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-duty">
                <FaAngleDoubleRight className="angle" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
