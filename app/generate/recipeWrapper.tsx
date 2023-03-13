"use client";

import Recipes from "@/components/ClientOnly";
import { useEffect, useState } from "react";

export default function RecipeWrapper() {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return <Recipes />;
}
