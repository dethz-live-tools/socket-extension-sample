import type { ServerWebSocket } from "bun";
import type { ExpansionContext } from "../../../src/modules/expansion";
import { meta } from "./meta";

/**
 * Handle incoming WebSocket messages with sample prefix
 */
export function handleWsMessage(
  msg: string,
  ws: ServerWebSocket,
  context: ExpansionContext,
): boolean {
  console.log(`[${meta.name}] Received WS message:`, msg);
  // Return true to mark as handled
  return true;
}
