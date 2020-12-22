import type { PriceResponse, TitleData } from '../utils/interfaces';
/**
 * Gets pricing information for the requested games. Paginates every 50 games.
 *
 * @param country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param gameIds One or more NSUID of the corresponding games.
 * @param offset _(Optional)_ The offset to start at
 * @param prices _(Optional)_ An array of {@link TitleData}
 * @returns A promise containing the pricing information.
 */
export declare const getPrices: (country: string, gameIds: string[] | string, offset?: number, prices?: TitleData[]) => Promise<PriceResponse>;
//# sourceMappingURL=getPrices.d.ts.map