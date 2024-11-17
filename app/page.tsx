"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Map, Shield } from "lucide-react";
import Image from "next/image";
import BookingForm from "@/components/booking-form";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import ScrollVideo from "@/components/animations/ScrollVideo";
import { useEffect } from "react";
import { config } from "@/constants/config";

export default function Home() {
  useEffect(()=>{
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  },[])
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Book",
      description: " just a few clicks",
      image: "/images/book-service.jpg"
    },
    {
      title: "Care",
      description: " and",
      icon: <Shield className="h-6 w-6" />,
      image: "/images/care-service.jpg"
    },
    {
      title: "Freely",
      description: "light",
      icon: <Map className="h-6 w-6" />,
      image: "/images/travel-service.jpg"
    }
  ];

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden bg-backgroundColor-light-foreground dark:bg-backgroundColor-dark-foreground m-0 p-0">
      {/* Hero Section */}
      <ScrollVideo />
      <section className="relative w-full h-[600px]">
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4`}>
          <motion.span
            className="text-textColor-light dark:text-textColor-dark text-title font-bold mb-0 mt-12"
            {...fadeIn}
          >
            <span className="text-[#FF5580] dark:text-[#697565] pr-4">
             {config?.home?.hero?.span1} 
            </span>
            {config?.home?.hero?.span2}
            <span
              className=" pl-4
      bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent
      dark:from-indigo-400 dark:to-teal-400
    "
            >
              {config?.home?.hero?.span3}
            </span>
          </motion.span>


          <motion.p
            className="text-textColor-light dark:text-textColor-dark text-punch text-center mb-8 mt-1"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            {config?.home?.hero?.punch}
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
          
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 w-full max-w-7xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 w-full bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Booking Form
          </motion.h2>
          <BookingForm />
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-16 px-4 w-full max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Track Your</h2>
          <p className="mb-8 text-muted-foreground">
            Never lose sight of your. Track its  in real-time and ensure it safely.
          </p>
          <Button variant="outline" size="lg">
            Track
          </Button>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 w-full bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <TestimonialCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 w-full">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Secure</h2>
          <p className="mb-8 text-muted-foreground">
            
          </p>
          <Button size="lg">Book Now</Button>
        </motion.div>
      </section>
    </div>
  );
}
