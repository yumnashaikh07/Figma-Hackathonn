"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const shippingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  mobileNumber: z.string().regex(/^\d{10,15}$/, "Invalid mobile number"),
  country: z.enum(["Pakistan", "UK", "Saudi Arabia"], { required_error: "Select a country" }),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
  streetAddress: z.string().min(5, "Street address is required"),
});

type ShippingFormValues = z.infer<typeof shippingSchema>;

const countryData: Record<string, { provinces: string[]; cities: string[] }> = {
  Pakistan: { provinces: ["Punjab", "Sindh", "KPK"], cities: ["Lahore", "Karachi", "Peshawar"] },
  UK: { provinces: ["England", "Scotland", "Wales"], cities: ["London", "Glasgow", "Cardiff"] },
  "Saudi Arabia": { provinces: ["Riyadh Province", "Makkah Province", "Eastern Province"], cities: ["Riyadh", "Jeddah", "Dammam"] },
};

export default function ShippingForm() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const { provinces = [], cities = [] } = selectedCountry ? countryData[selectedCountry] : {};

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingSchema),
  });

  useEffect(() => {
    setValue("country", (selectedCountry as "Pakistan" | "UK" | "Saudi Arabia") || "");
  }, [selectedCountry, setValue]);

  const onSubmit: SubmitHandler<ShippingFormValues> = async (data) => {
    try {
      await client.create({
        _type: "shippingDetails",
        ...data,
      });
      alert("Shipping details successfully saved!");
    } catch (err) {
      console.error("Error saving shipping details:", err);
    }
  };

  return (
    <main className="shadow-xl p-10">
      <h3 className="font-mono font-semibold">Shipping Details</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-lg">
        <div className="md:flex md:justify-between md:space-y-0 space-y-4 md:space-x-3">
          <Input placeholder="First Name" {...register("firstName")} className="border-gray-300" />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}

          <Input placeholder="Last Name" {...register("lastName")} className="border-gray-300" />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
        </div>

        <Input
          type="tel"
          placeholder="Mobile Number"
          {...register("mobileNumber")}
          className="border-gray-300"
        />
        {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber.message}</p>}

        <Select onValueChange={(value) => setSelectedCountry(value)} value={selectedCountry || ""}>
          <SelectTrigger>
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(countryData).map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="text-red-500">{errors.country.message}</p>}

        <Select onValueChange={(value) => setValue("province", value)} value={watch("province")}>
          <SelectTrigger>
            <SelectValue placeholder="Select Province" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((province) => (
              <SelectItem key={province} value={province}>
                {province}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.province && <p className="text-red-500">{errors.province.message}</p>}

        <Select onValueChange={(value) => setValue("city", value)} value={watch("city")}>
          <SelectTrigger>
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}

        <Input placeholder="Street Address" {...register("streetAddress")} className="border-gray-300" />
        {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}

        <Button type="submit" className="bg-blue-500 w-full text-white">
          Save Shipping Details
        </Button>
      </form>
    </main>
  );
}
