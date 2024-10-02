'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import categories from '../../utils/category.json';
import { CategoryProps } from "@/types/signupInput";

const BusinessCategory: React.FC<CategoryProps> = ({ onCategoryChange }) => {

  const handleCategorySelect = (value: string) => {
    onCategoryChange(value);
  };

  return (
    <Select onValueChange={handleCategorySelect}>
      <SelectTrigger 
        id="bcategory"
        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left font-body text-[16px] text-black shadow-sm  focus:outline-none"
      >
        <SelectValue placeholder="Business Category" />
      </SelectTrigger>
      <SelectContent 
        className="w-full rounded-md border border-gray-300 bg-white shadow-lg"
        position="popper"
      >
        {categories.map((category, index) => (
          <SelectItem 
            key={index} 
            value={category} 
            className="p-2 hover:bg-gray-100"
          >
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default BusinessCategory;
