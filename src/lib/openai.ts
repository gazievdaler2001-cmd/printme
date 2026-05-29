import { isOpenAIEnabled } from "@/lib/env";

// ------------------------------------------------------------------
// AI layer (Phase 0 stub).
//
// All functions return placeholder results while OPENAI_API_KEY is not
// set, so the rest of the app can be built and tested. Real OpenAI calls
// (image generation / edits / moderation) land in Phase 3.
// ------------------------------------------------------------------

export type DesignStyle =
  | "none"
  | "anime"
  | "cyberpunk"
  | "streetwear"
  | "minimal";

const STYLE_PROMPT_SUFFIX: Record<DesignStyle, string> = {
  none: "",
  anime: ", anime style, vibrant, clean lineart, high detail",
  cyberpunk: ", cyberpunk style, neon lighting, futuristic, high contrast",
  streetwear: ", streetwear graphic, bold, urban, screen-print aesthetic",
  minimal: ", minimalist, simple shapes, limited palette, flat design",
};

/** A 1x1 transparent PNG used as a safe placeholder print. */
const PLACEHOLDER_PRINT =
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1024";

function buildPrompt(prompt: string, style: DesignStyle): string {
  // Wrap the user's intent for print-friendly output (transparent-ready,
  // centered subject, no text artifacts).
  return `${prompt}${STYLE_PROMPT_SUFFIX[style]}, centered composition, isolated subject on plain background, suitable for apparel print`;
}

export interface GenerateImageResult {
  url: string;
  mock: boolean;
  prompt: string;
}

/** Generate an image from a text prompt. */
export async function generateImage(
  prompt: string,
  style: DesignStyle = "none",
): Promise<GenerateImageResult> {
  const fullPrompt = buildPrompt(prompt, style);

  if (!isOpenAIEnabled()) {
    return { url: PLACEHOLDER_PRINT, mock: true, prompt: fullPrompt };
  }

  // TODO (Phase 3): call OpenAI images API with fullPrompt.
  // const client = new OpenAI({ apiKey: env.openaiApiKey });
  // const res = await client.images.generate({ model: env.openaiImageModel, prompt: fullPrompt, size: "1024x1024" });
  throw new Error("OpenAI integration not implemented yet (Phase 3).");
}

/** Apply a style transfer to an uploaded image. */
export async function stylizeImage(
  imageUrl: string,
  style: DesignStyle,
): Promise<GenerateImageResult> {
  if (!isOpenAIEnabled()) {
    return { url: imageUrl, mock: true, prompt: `stylize:${style}` };
  }
  throw new Error("OpenAI integration not implemented yet (Phase 3).");
}

/** Remove the background to produce a print-ready transparent PNG. */
export async function removeBackground(imageUrl: string): Promise<GenerateImageResult> {
  if (!isOpenAIEnabled()) {
    return { url: imageUrl, mock: true, prompt: "remove-bg" };
  }
  throw new Error("Background removal not implemented yet (Phase 3).");
}

/** Upscale an image for high-quality DTF print (~300 DPI). */
export async function upscaleImage(imageUrl: string): Promise<GenerateImageResult> {
  if (!isOpenAIEnabled()) {
    return { url: imageUrl, mock: true, prompt: "upscale" };
  }
  throw new Error("Upscale not implemented yet (Phase 3).");
}

/** Moderate user text/prompt before generation. */
export async function moderateText(text: string): Promise<{ flagged: boolean }> {
  if (!isOpenAIEnabled()) {
    return { flagged: false };
  }
  throw new Error("Moderation not implemented yet (Phase 3).");
}
