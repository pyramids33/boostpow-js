import * as bsv from 'bsv';
import { BoostPowMetadataModel } from './boost-pow-metadata-model';
export declare class BoostPowStringModel {
    private _blockheader;
    private _metadata;
    constructor(blockheader: bsv.BlockHeader, metadata?: BoostPowMetadataModel);
    boosthash(): string;
    hash(): string;
    id(): string;
    contentHex(): string;
    contentBuffer(): string;
    trimBufferString(str: string, trimLeadingNulls?: boolean): string;
    contentString(trimLeadingNulls?: boolean): string;
    bits(): number;
    metadataHash(): string;
    nonce(): number;
    time(): number;
    category(): number;
    static nBitsHexToDifficultyNumber(nbits: string): number;
    getTargetAsNumberBuffer(): any;
    static difficultyNumberToNBitsHex(diff: number): string;
    static validProofOfWorkFromBuffer(buf: any): boolean;
    static validProofOfWorkFromString(str: any): boolean;
    static validProofOfWorkFromObject(obj: any): boolean;
    /**
     * Check whether each element is a valid BoostPowString (POW!)
     *
     * If even a single entry is not valid, then an exception will be thrown and parsing of everything fails.
     *
     * Initially we can be strict because we should expect careful usage and passing of data.
     *
     * @param arrayOfPotentialBoostPowStrings Array of objects that have toString() defined
     */
    static fromStringArray(arrayOfPotentialBoostPowStrings: any[]): Array<BoostPowStringModel>;
    static fromBuffer(buf: any): BoostPowStringModel;
    static fromString(str: any): BoostPowStringModel;
    static fromHex(str: any): BoostPowStringModel;
    static fromObject(obj: any): BoostPowStringModel;
    static from(str: any): BoostPowStringModel;
    toBuffer(): any;
    toString(): any;
    toHex(): any;
    toObject(): {
        hash: any;
        content: any;
        bits: any;
        difficulty: number;
        category: any;
        metadataHash: any;
        time: any;
        nonce: any;
    };
    difficulty(): number;
    targetDifficulty(bits?: number): any;
}
