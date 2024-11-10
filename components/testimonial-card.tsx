"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="max-w-2xl mx-auto overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg mb-6">
            "MeraLuggage made my travel experience so much smoother! 
            The luggage tracking feature is a game-changer."
          </p>
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/testimonial-avatar.jpg"
                alt="Emily Johnson"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">Emily Johnson</h4>
              <p className="text-sm text-muted-foreground">Frequent Traveller</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}