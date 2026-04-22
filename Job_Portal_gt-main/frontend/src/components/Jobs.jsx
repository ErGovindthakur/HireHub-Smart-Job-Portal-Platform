import { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  // 👉 Drawer state
  const [isOpen, setIsOpen] = useState(false);

  // 👉 Filter logic (unchanged)
  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  // 👉 Prevent background scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="max-w-7xl mx-auto mt-20 px-3">

      {/* ✅ Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Jobs</h1>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#8153FB] text-white p-2 rounded-md flex items-center gap-2 md:hidden"
        >
          <SlidersHorizontal size={18} />
          <span className="hidden sm:inline">
            {isOpen ? "Close Filters" : "Filters"}
          </span>
        </button>
      </div>

      {/* ✅ Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ Drawer */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-[80%] sm:w-[350px] bg-white z-50 p-4 shadow-lg">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <FilterCard />
        </div>
      )}

      {/* ✅ Main Layout */}
      <div className="flex gap-5">
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-[250px]">
          <FilterCard />
        </div>

        {/* Jobs Section */}
        {filterJobs.length <= 0 ? (
          <span>Job not found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filterJobs.map((job) => (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  key={job?._id}
                >
                  <Job job={job} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;