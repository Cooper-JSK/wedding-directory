"use client";
import React, { Fragment, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BusinessCategory from "@/components/vendor-signup/BusinessCategory";

interface ProfileData {
  firstName: string;
  lastName: string;
  businessName: string;
  phoneNumber: string;
  category: string;
}

const EditProfile: React.FC = () => {
  // Form state with demo data
  const [profile, setProfile] = useState<ProfileData>({
    firstName: "John",
    lastName: "Doe",
    businessName: "John's Flower Shop",
    phoneNumber: "123-456-7890",
    category: "Florist",
  });

  // Handle input changes for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle category change for the dropdown
  const handleCategoryChange = (category: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      category,
    }));
  };

  // Handle form submission (no backend yet, so this just prevents default behavior)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile saved successfully!");
    console.log(profile); // This will log the updated profile in the browser console for now
  };

  return (
    <Fragment>
      <div className="bg-white rounded-2xl p-4 px-8 shadow-lg">
        <h2 className="font-title text-[30px] ">Vendor Profile</h2>
        <hr className="w-[168px] h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <form onSubmit={handleSubmit} className="mb-8">
          <div>
            <label className="font-body text-[16px] ">First Name</label>
            <Input
              name="firstName"
              value={profile.firstName}
              onChange={handleInputChange}
              className="font-body rounded-md mt-2 mb-3"
            />
          </div>
          <div>
            <label className="font-body text-[16px] ">Last Name</label>
            <Input
              name="lastName"
              value={profile.lastName}
              onChange={handleInputChange}
              className="font-body rounded-md mt-2 mb-3"
            />
          </div>
          <div>
            <label className="font-body text-[16px] ">Business Name</label>
            <Input
              name="businessName"
              value={profile.businessName}
              onChange={handleInputChange}
              className="font-body rounded-md mt-2 mb-3"
            />
          </div>
          <div>
            <label className="font-body text-[16px] ">Phone Number</label>
            <Input
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              className="font-body rounded-md mt-2 mb-3"
            />
          </div>
          <div>
            <label className="font-body text-[16px] mt- mb-3 ">Category</label>
            {/* Integrating the BusinessCategory dropdown */}
            <div className="font-body rounded-md mt-2 mb-3">
              <BusinessCategory onCategoryChange={handleCategoryChange} />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-2xl p-4 px-8 shadow-lg my-8 justify-center flex">
        <Button variant="signup" className="m-3 w-full">
          Save Profile Information
        </Button>
      </div>
    </Fragment>
  );
};

export default EditProfile;
