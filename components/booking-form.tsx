"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBooking } from "@/lib/redux/features/bookingSlice";

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(addBooking(data));
    // Handle form submission
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                {...register("pickupPoint", { required: true })}
                placeholder="Pick Up Point"
                className="w-full"
              />
              {errors.pickupPoint && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            
            <div>
              <Input
                {...register("destinationAirport", { required: true })}
                placeholder="Destination Airport"
                className="w-full"
              />
              {errors.destinationAirport && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <Input
                {...register("pickupDate", { required: true })}
                type="date"
                className="w-full"
              />
              {errors.pickupDate && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <Input
                {...register("pickupTime", { required: true })}
                type="time"
                className="w-full"
              />
              {errors.pickupTime && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Get a Quote
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}