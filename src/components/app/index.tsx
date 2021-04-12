import React, { FC } from "react";
import { navigate } from "gatsby";

import DisplayLolly from "../displayLolly";
import { useGetLollyByIdQuery } from "../../api";

interface AppProps {
  lollyId: string;
}

const App: FC<AppProps> = ({ lollyId }) => {
  const { data, error, loading } = useGetLollyByIdQuery({
    variables: { id: lollyId },
  });

  if (error) {
    navigate("/404");
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && !error && data && <DisplayLolly lolly={data?.getLolly} />}
    </>
  );
};

export default App;
