import { Heart, Luggage } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              
              <span className="ml-2 text-xl font-bold">name</span>
              <Luggage className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Making hassle-free for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                How it Works
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                About us
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Contact us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                FAQs
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Help Center
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="max-w-[200px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}