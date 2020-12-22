import type { Region } from '../utils/constants';
import type { EShop } from '../utils/interfaces';
/**
 * Gets all active eShops given a list of countries.
 *
 * @param countryCodes A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param gameCode A 14 digits game NSUID from the desired region.
 * @param region A region id that will be appended in the final shop object for filtering purposes.
 * @returns A list of shop objects with country code, name and default currency.
 */
export declare const getShopsByCountryCodes: (countryCodes: string[], gameCode: string, region: Region) => Promise<EShop[]>;
//# sourceMappingURL=getShopByCountryCode.d.ts.map