/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const TransferCallActionUpdateParamsConfig: core.serialization.Schema<
    serializers.TransferCallActionUpdateParamsConfig.Raw,
    Vocode.TransferCallActionUpdateParamsConfig
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).TransferCallConfig),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace TransferCallActionUpdateParamsConfig {
    type Raw = serializers.TransferCallConfig.Raw | serializers.Undefined.Raw;
}
