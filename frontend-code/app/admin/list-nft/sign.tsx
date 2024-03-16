'use client'
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    totalTickets: "",
    date: "",
    time: "",
    location: "",
    ticketNFTPhoto: null, // Changed to null to store the file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      ticketNFTPhoto: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data into the desired format
    const { name, price, totalTickets, date, time, location, ticketNFTPhoto } = formData;

    // Convert the file to a PNG blob
    const reader = new FileReader();
    reader.readAsDataURL(ticketNFTPhoto);
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        canvas.toBlob((blob) => {
          // Log the converted blob
          console.log("Converted PNG Blob:", blob);
          // Now you can do whatever you want with the formatted data, such as sending it to a smart contract or storing it in a database
          const formattedData = {
            _name: name,
            _cost: parseInt(price), // Convert price to uint256
            _maxTickets: parseInt(totalTickets), // Convert totalTickets to uint256
            _date: date,
            _time: time,
            _location: location,
            _ipfsImageHash: blob, // Changed to use the converted blob
          };
          console.log("Formatted data:", formattedData);
        }, "image/png");
      };
    };

    // Reset the form after submission
    setFormData((prevData) => ({
      ...prevData,
      ticketNFTPhoto: null, // Reset the file input
    }));
  };

  return (
    <div>
      <br />
      <br />
      <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-8 md:p-18 pt-8 shadow-input bg-white dark:bg-black border border-white-2">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          List the NFT
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to 4ntrix if you can because we don&apos;t have a login flow yet
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Event Name</Label>
            <Input
              id="name"
              placeholder="Enter Event Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="price">Ticket Price</Label>
            <Input
              id="price"
              placeholder="Enter Ticket Price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="totalTickets">Total Tickets</Label>
            <Input
              id="totalTickets"
              placeholder="Enter Total Number of Tickets"
              type="number"
              name="totalTickets"
              value={formData.totalTickets}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              placeholder="Enter Date of Event"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              placeholder="Enter Time of Event"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter Location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </LabelInputContainer>

          {/* New input for uploading NFT photo */}
          <LabelInputContainer className="mb-4">
            <Label htmlFor="ticketNFTPhoto">Ticket NFT Photo</Label>
            <input
              id="ticketNFTPhoto"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Continue &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={"flex flex-col space-y-2 w-full " + className}>
      {children}
    </div>
  );
};
