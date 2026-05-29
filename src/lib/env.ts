// Centralised access to environment + feature-mode detection.
// Phase 0: external integrations run in MOCK mode unless keys are present,
// so the app is fully runnable locally without real secrets.

export const env = {
  openaiApiKey: process.env.OPENAI_API_KEY ?? "",
  openaiImageModel: process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-1",

  r2: {
    accountId: process.env.R2_ACCOUNT_ID ?? "",
    accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
    bucket: process.env.R2_BUCKET ?? "printme",
    publicUrl: process.env.R2_PUBLIC_URL ?? "",
  },

  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN ?? "",
    managerChatId: process.env.TELEGRAM_MANAGER_CHAT_ID ?? "",
  },

  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;

/** True when OpenAI is configured; otherwise AI helpers return placeholders. */
export const isOpenAIEnabled = () => env.openaiApiKey.length > 0;

/** True when R2 is configured; otherwise uploads return mock URLs. */
export const isR2Enabled = () =>
  env.r2.accountId.length > 0 &&
  env.r2.accessKeyId.length > 0 &&
  env.r2.secretAccessKey.length > 0;

/** True when Telegram is configured; otherwise notifications are logged. */
export const isTelegramEnabled = () =>
  env.telegram.botToken.length > 0 && env.telegram.managerChatId.length > 0;
