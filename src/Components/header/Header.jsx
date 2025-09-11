import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="absolute container top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6 z-20">
      {/* Logo */}
      <div className="h-[50px] w-[185px]">
        <img
          src="/images/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Select className="bg-black">
          <SelectTrigger className="w-[80px] md:w-[180px] bg-black/60 border-none outline-0 text-white">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent className="bg-black/50">
            <SelectGroup className="bg-black/50">
              <SelectLabel className="text-white">Language</SelectLabel>
              <SelectItem className="text-white" value="arabic">
                Arabic
              </SelectItem>
              <SelectItem className="text-white" value="english">
                English
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="bg-red-600 text-white text-sm md:text-base py-1 rounded hover:bg-red-700">
          Register
        </Button>
      </div>
    </header>
  );
}
