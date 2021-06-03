import React, { useEffect, useState } from "react";
import FeaturedPropertiesDetail from "../FeaturedPropertiesDetail/FeaturedPropertiesDetail";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://boiling-brushlands-11908.herokuapp.com/apartmentData")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
      });
  }, []);
  let propertiesData = properties
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <div className="container mt-5 ">
      <h2 className="text-center text-primary fw-bolder">
        Featured Apartments
      </h2>
      <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        {propertiesData?.map((property) => (
          <FeaturedPropertiesDetail
            property={property}
          ></FeaturedPropertiesDetail>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
