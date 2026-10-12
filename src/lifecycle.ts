import type { ExpansionContext } from "../../../src/modules/expansion";
import { meta } from "./meta";

/**
 * Lifecycle hook invoked on module initialization
 */
export function onInit(context: ExpansionContext): void {
  console.log(`[${meta.name}] Module initialized!`);
}

/**
 * Lifecycle hook invoked on module teardown / reload
 */
export function onDestroy(): void {
  console.log(`[${meta.name}] Module destroyed!`);
}
