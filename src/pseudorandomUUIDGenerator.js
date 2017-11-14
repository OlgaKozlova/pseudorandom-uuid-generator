import uuid from 'node_uuid';

/**
 * Pseudo random uuid generator
 */
export default class UUIDGenerator {
    constructor(seed = 0) {
        this._seed = seed;
    }
    getUUID() {
        return uuid.v4({
            random: new Array(16).fill(1).map(() => this.getPseudoRandomHexNumber()),
        });
    }
    getPseudoRandomHexNumber() {
        const min = 0;
        const max = 255;

        this._seed = ((this._seed * 9301) + 49297) % 233280;
        const rnd = this._seed / 233280;
        const pseudoRandomNumber = Math.floor(min + (rnd * (max - min)));

        return parseInt(pseudoRandomNumber.toString(16), 16);
    }
}
