import { defineApiModule } from "../../src/modules/expansion";
import { meta } from "./src/meta";
import { registerRoutes } from "./src/router";
import { handleWsMessage } from "./src/ws";
import { onInit, onDestroy } from "./src/lifecycle";

/**
 * API Module: sample
 */
export default defineApiModule({
  meta: {
    name: meta.name,
    version: meta.version || "1.0.0",
    description: meta.description || "",
    author: meta.author || "",
    tags: meta.tags || [],
    enabled: meta.enabled ?? true,
  },

  // Route subpath under /api/extension (defaults to "/sample")
  routePath: meta.routePath || `/${meta.name}`,

  // WebSocket message prefix filter (optional)
  wsPrefix: meta.wsPrefix || `${meta.name}: `,

  // Setup Hono routes
  router: registerRoutes,

  // Optional WebSocket incoming message handler
  onWsMessage: handleWsMessage,

  // Lifecycle hooks
  onInit,
  onDestroy,
});

export * from "./src/meta";
export * from "./src/router";
export * from "./src/ws";
export * from "./src/lifecycle";
