import type { EURequestOptions, GameEU } from '../utils/interfaces';
/**
 * Fetches all games on the European, Australian or New Zealand eShops
 *
 * @remarks
 * Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region
 *
 * @param options - Request options to pass to the eShop request {@link EURequestOptions | See EURequestOptions for details}
 * @returns Promise containing all requested EU/PAL games
 */
export declare const getGamesEurope: (options?: EURequestOptions) => Promise<GameEU[]>;
//# sourceMappingURL=getGamesEurope.d.ts.map