import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdb-react-ui-kit";
function SocialBoat() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    async function getResults() {
      try {
        if (search.length > 0) {
          const response = await axios.get(
            `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos/?q=${search}&numResults=10`
          );
          console.log(response.data.results);
          const ans = await response.data.results;
          console.log(ans);
          setData(ans);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getResults();
  }, [search]);
  const result =
    data.length > 0 &&
    data.map(({ video, tags, desc }, idx) => {
      return (
        <MDBCol key={idx + 1}>
          <MDBCard>
            <iframe
              src={video}
              position="top"
              title="video"
              allowFullScreen
            ></iframe>
            <MDBCardBody>
              {tags.map((d, idx) => {
                return (
                  <p className="badge bg-primary m-1" key={idx + 1}>
                    {d}
                  </p>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    });
  return (
    <div className="container-md m-1 p-2 ">
      <MDBInput
        label="Search"
        id="form1"
        className="form-control "
        type="text"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <MDBRow className="row-cols-1 m-2 row-cols-md-3 g-3">{result}</MDBRow>
    </div>
  );
}

export default SocialBoat;
