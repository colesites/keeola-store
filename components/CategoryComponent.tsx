import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CategoryComponent = () => {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold text-amber-950">Category</h2>
      <RadioGroup defaultValue="all" className="mt-4">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="all" id="r1" />
          <Label htmlFor="r1">All</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="male" id="r2" />
          <Label htmlFor="r2">Male</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="female" id="r3" />
          <Label htmlFor="r3">Female</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="kids" id="r4" />
          <Label htmlFor="r4">Kids</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="crochets" id="r5" />
          <Label htmlFor="r5">Crochets</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="freshArrivals" id="r6" />
          <Label htmlFor="r6">Fresh Arrivals</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="prelovedStyles" id="r7" />
          <Label htmlFor="r7">Preloved Styles</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default CategoryComponent;
