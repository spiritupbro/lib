import type { AzureFunction } from '@azure/functions';
import type { Context } from '@azure/functions';
import { Render } from '@builder.io/qwik/server';
import type { RenderOptions } from '@builder.io/qwik';
import type { ServerRenderOptions } from '@spiritbro1/qwik-city/middleware/request-handler';

/**
 * @alpha
 */
export declare function createQwikCity(opts: QwikCityAzureOptions): AzureFunction;

/**
 * @alpha
 */
export declare interface PlatformAzure extends Partial<Context> {
}

/**
 * @alpha
 * @deprecated Please use `createQwikCity()` instead.
 *
 * Example:
 *
 * ```ts
 * import { createQwikCity } from '@spiritbro1/qwik-city/middleware/azure-swa';
 * import qwikCityPlan from '@qwik-city-plan';
 * import render from './entry.ssr';
 *
 * export default createQwikCity({ render, qwikCityPlan });
 * ```
 */
export declare function qwikCity(render: Render, opts?: RenderOptions): AzureFunction;

/**
 * @alpha
 */
export declare interface QwikCityAzureOptions extends ServerRenderOptions {
}

export { }
