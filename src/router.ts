import { Hono } from "hono";
import type { ExpansionContext } from "../../../src/modules/expansion";
import { meta } from "./meta";

/**
 * Register HTTP routes on Hono router
 */
export function registerRoutes(router: Hono, context: ExpansionContext): void {
  // GET /api/extension/sample
  router.get("/", (c) => {
    return c.json({
      module: meta.name,
      status: "active",
      timestamp: new Date().toISOString(),
    });
  });

  // POST /api/extension/sample/trigger - Broadcast to overlay clients
  router.post("/trigger", async (c) => {
    const body = await c.req.json().catch(() => ({}));
    const payload = JSON.stringify({
      event: `${meta.name}:trigger`,
      data: body,
    });

    // Broadcast to WebSocket clients on system topic
    context.broadcast(payload);

    return c.json({
      success: true,
      broadcasted: true,
    });
  });
}
