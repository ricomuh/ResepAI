import { NextRequest, NextResponse } from "next/server";

export async function GET(params: NextRequest) {
  const { searchParams } = new URL(params.url);
  const ingredients = searchParams.get("ingredients");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  };
  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Berikan saya step-step apa saja resep membuat makanan dengan bahan berikut: ${ingredients}. berikan jawaban dengan format json tanpa enter(\n): {title: string, bahan: string[], steps: string[]}`,
      },
    ],
  };

  const response = await fetch(
    process.env.NEXT_PUBLIC_OPENAI_API_URL ||
      "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  const result = data.choices[0].message.content;

  const { title: titleRes, bahan, steps: stepsRes } = JSON.parse(result);

  const title = titleRes.replace("Resep ", "");
  const steps = stepsRes.map((step: string, index: number) => {
    const stepNumber = index + 1;
    const newStep = step.replace(`${stepNumber}. `, "");
    return newStep;
  });

  return NextResponse.json({ title, bahan, steps });

  //   return NextResponse.json();
}
