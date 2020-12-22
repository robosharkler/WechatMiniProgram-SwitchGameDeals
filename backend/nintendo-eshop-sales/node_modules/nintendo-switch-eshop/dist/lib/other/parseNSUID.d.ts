import { Region } from '../utils/constants';
import type { GameEU, GameJP, GameUS } from '../utils/interfaces';
/**
 * Extracts NSUID information from the game object.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 14-digits NSUID
 */
export declare const parseNSUID: (game: GameUS | GameEU | GameJP, region: Region) => string | null;
//# sourceMappingURL=parseNSUID.d.ts.map