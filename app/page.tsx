"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Luggage, Map, Shield } from "lucide-react";
import Image from "next/image";
import BookingForm from "@/components/booking-form";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import LuggageAnimation from "@/components/animations/LuggageAnimation";
import ScrollVideo from "@/components/animations/ScrollVideo";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Book",
      description: "Book your luggage pickup with just a few clicks",
      icon: <Luggage className="h-6 w-6" />,
      image: "/images/book-service.jpg"
    },
    {
      title: "Take Care",
      description: "We ensure your bags are safely picked up and delivered",
      icon: <Shield className="h-6 w-6" />,
      image: "/images/care-service.jpg"
    },
    {
      title: "Travel Freely",
      description: "Travel light while we handle your luggage",
      icon: <Map className="h-6 w-6" />,
      image: "/images/travel-service.jpg"
    }
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-textColor-light dark:text-textColor-dark`}>
          <motion.h1
            className="text-4xl md:text-[64px] font-bold text-center mb-4 mt-12"
            {...fadeIn}
          >
            Travel Light, Arrive
            <span
              className=" pl-4
      bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent
      dark:from-indigo-400 dark:to-teal-400
    "
            >
              Right
            </span>
          </motion.h1>


          <motion.p
            className="text-[20px] text-center mb-8 mt-2"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            Let your luggage reach your destination before you do. India's first smart luggage delivery service for travellers.
          </motion.p>

          <LuggageAnimation />
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
          <ScrollVideo />
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
          <h2 className="text-3xl font-bold mb-4">Track Your Luggage</h2>
          <p className="mb-8 text-muted-foreground">
            Never lose sight of your luggage. Track its location in real-time and ensure it arrives safely.
          </p>
          <Button variant="outline" size="lg">
            Track my Bag
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Trip</h2>
          <p className="mb-8 text-muted-foreground">
            Experience hassle-free travel with our expert luggage handling services.
            Book now to ensure a stress-free journey.
          </p>
          <Button size="lg">Book Now</Button>
        </motion.div>
      </section>
    </div>
  );
}
