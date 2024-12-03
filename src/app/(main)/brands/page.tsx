import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    "Vegetables",
    "Fresh Fruits",
    "Milk & Eggs",
    "Bakery",
    "Drinks",
  ];
  return NextResponse.json(categories);
}
