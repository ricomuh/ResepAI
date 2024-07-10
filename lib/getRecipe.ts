import { Result } from "@/app/generate/page";

type ResponseSuccess = {
  error: false;
  result: Result;
};

type ResponseError = {
  error: true;
  message: string;
};

export default async function getRecipe(
  ingredients: string[]
): Promise<ResponseSuccess | ResponseError> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_OPENAI_API_URL ||
      "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Berikan saya step-step apa saja resep membuat makanan dengan bahan berikut: ${ingredients.join(
              ", "
            )}. berikan jawaban dengan format json tanpa enter(\n): {title: string, bahan: string[], steps: string[]}`,
          },
        ],
      }),
      cache: "no-store",
    }
  );

  const data = await response.json();
  // if get error from openai api
  if (data.error) {
    return {
      error: true,
      message: data.error,
    };
  }
  // if get success from openai api
  // validate result
  const result = data.choices[0].message.content;
  if (!isJson(result)) {
    return {
      error: true,
      message: "Invalid result from OpenAI API (not json): " + result,
    };
  }

  const {
    title: titleRes,
    bahan,
    steps: stepsRes,
  }: Result = JSON.parse(result);

  const title = titleRes.replace("Resep ", "");
  const steps = stepsRes.map((step: string, index: number) => {
    const stepNumber = index + 1;
    return step.replace(`${stepNumber}. `, "");
  });

  return {
    error: false,
    result: {
      title,
      bahan,
      steps,
    },
  };
}

function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
