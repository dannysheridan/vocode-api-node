/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const TransferCallActionParams: core.serialization.ObjectSchema<
    serializers.TransferCallActionParams.Raw,
    Vocode.TransferCallActionParams
> = core.serialization.object({
    config: core.serialization.lazyObject(async () => (await import("..")).TransferCallConfig),
});

export declare namespace TransferCallActionParams {
    interface Raw {
        config: serializers.TransferCallConfig.Raw;
    }
}
