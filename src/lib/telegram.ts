import { env, isTelegramEnabled } from "@/lib/env";

// ------------------------------------------------------------------
// Telegram notifications (Phase 0 stub).
//
// Notifies the manager when a new order arrives. Without a bot token
// the message is logged to the server console instead of being sent.
// ------------------------------------------------------------------

export interface OrderNotification {
  orderId: string;
  productType: string;
  color: string;
  size: string;
  name: string;
  phone: string;
  telegram: string;
  address: string;
  mockupUrl: string;
  printUrl: string;
}

export async function notifyNewOrder(order: OrderNotification): Promise<void> {
  const text = [
    "🆕 *Новый заказ PrintMe*",
    `Заказ: \`${order.orderId}\``,
    `Товар: ${order.productType} / ${order.color} / ${order.size}`,
    `Имя: ${order.name}`,
    `Телефон: ${order.phone}`,
    `Telegram: ${order.telegram}`,
    `Адрес: ${order.address}`,
    `Мокап: ${order.mockupUrl}`,
    `Принт (PNG): ${order.printUrl}`,
  ].join("\n");

  if (!isTelegramEnabled()) {
    console.log("[telegram:mock] new order notification:\n" + text);
    return;
  }

  await fetch(`https://api.telegram.org/bot${env.telegram.botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: env.telegram.managerChatId,
      text,
      parse_mode: "Markdown",
    }),
  });
}
