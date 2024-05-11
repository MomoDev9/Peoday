import { useState } from "react";
import { motion } from "framer-motion";

import Bottom from "./bottom";
import Page from "./Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="flex flex-col bg-slate-800 m-0 p-0 min-h-screen ">
          <Page />
          <Bottom />
        </div>
      </motion.div>
    </>
  );
}

export default App;
