"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Headers/Header";
import VendorResult from "@/components/vendor-search/VendorResult";
import { Button } from "@/components/ui/button";
import { FIND_SERVICES } from "@/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import FilterSearchBar from "@/components/vendor-search/FilterSearchBar";

const VendorSearch = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const [getServices, { loading, data, error }] = useLazyQuery(FIND_SERVICES, {
    variables: {
      filter: {
        city: null,
        category: null,
      },
    },
  });

  // Execute query on page load (no filters)
  useEffect(() => {
    getServices();
  }, [getServices]);

  const handleSearch = () => {
    getServices({
      variables: {
        filter: {
          city: city || null,
          category: category || null,
        },
      },
    });
  };

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const handleBanner = (banner: string | null) => {
    // Check if the banner is a valid URL (non-empty and contains 'http' or 'https')
    if (
      banner &&
      (banner.startsWith("http://") || banner.startsWith("https://"))
    ) {
      return banner;
    }
    // If not valid or missing, return the default image path
    return "/images/photography.webp";
  };

  return (
    <div className="bg-lightYellow font-title">
      <Header />
      <div className="mt-4 mb-6">
        <h2 className="mx-40 text-3xl text-center font-bold mb-1">
          Find the perfect crew for your wedding
        </h2>
        <h2 className="mx-40 text-xl text-center mb-6">
          Filter by Category and Location
        </h2>
      </div>

      <FilterSearchBar
        handleSearch={handleSearch}
        onCityChange={handleCityChange}
        onCategoryChange={handleCategoryChange}
      />
      <hr className="w-full h-px my-4 bg-slate-900 border-2  container" />

      <div className="flex flex-row mx-16 px-10">
        <div className="relative w-full m-3 md:w-3/4 h-full md:h-auto rounded-2xl overflow-hidden">
          <div className="flex flex-row space-x-4">
            <Button className="bg-white text-black hover:bg-gray-300">
              Distance
            </Button>
            <Button className="bg-white text-black hover:bg-gray-300">
              Price
            </Button>
            <Button className="bg-white text-black hover:bg-gray-300">
              Ratings
            </Button>
            <Button className="bg-white text-black hover:bg-gray-300">
              Featured
            </Button>
          </div>

          {loading && <div className="my-4 text-2xl">Loading...</div>}
          {error && <div className="my-4 text-2xl">Error: {error.message}</div>}

          {!loading && data && data.findOfferings.length > 0 ? (
            <>
              <div className="my-4 text-2xl">
                Found {data.findOfferings.length} vendors
              </div>
              <div className="grid grid-cols-3 gap-6 overflow-x-auto">
                {data.findOfferings.map((service: any) => (
                  <VendorResult
                    key={service.id}
                    name={service.name}
                    vendor={service.vendor.busname}
                    city={service.vendor.city}
                    banner={"/images/photography.webp"}
                    rating="⭐ 4.9 (154)" // customize the rating
                    price="$$-$$$" // customize the price
                    about={service.about}
                    showStats={true}
                    buttonText="View Details"
                    link={`/services/${service.id}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="my-4 text-2xl">No vendors found</div>
          )}
        </div>

        <div className="relative w-full m-3 md:w-1/4 h-full md:h-auto rounded-2xl bg-white overflow-hidden">
          <p className="text-center my-6 font-bold">Other Vendors You might like</p>
          <p className="mt text-center">Nothing to show yet</p>
          {/* <OtherVendor />
          <OtherVendor />
          <OtherVendor /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorSearch;
