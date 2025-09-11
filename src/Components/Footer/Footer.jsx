import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm">Questions? Contact us.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/investor-relations" className="hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/speed-test" className="hover:underline">
                  Speed Test
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:underline">
                  Legal Notices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/ways-to-watch" className="hover:underline">
                  Ways to Watch
                </Link>
              </li>
              <li>
                <Link href="/corporate-info" className="hover:underline">
                  Corporate Information
                </Link>
              </li>
              <li>
                <Link href="/originals" className="hover:underline">
                  Only on Streaming
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/media-center" className="hover:underline">
                  Media Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Select defaultValue="en">
            <SelectTrigger className="w-[180px] bg-transparent border-gray-600 text-gray-400">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 text-sm flex items-center justify-between">
          <p>Netflix</p>
          <p>&copy; {new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
