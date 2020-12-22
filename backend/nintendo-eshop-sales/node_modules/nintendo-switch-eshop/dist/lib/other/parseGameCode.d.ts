import { Region } from '../utils/constants';
import type { GameEU, GameJP, GameUS } from '../utils/interfaces';
/**
 * Parses the game code to extract the cross-region portion.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 4-digit resulting game code
 */
export declare const parseGameCode: (game: GameUS | GameEU | GameJP, region: Region) => string | null;
//# sourceMappingURL=parseGameCode.d.ts.map