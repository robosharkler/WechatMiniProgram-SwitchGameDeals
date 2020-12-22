import type { EShop } from '../utils/interfaces';
/**
 * Gets all active eShops on European countries.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export declare const getShopsEurope: () => Promise<EShop[]>;
//# sourceMappingURL=getShopsEurope.d.ts.map