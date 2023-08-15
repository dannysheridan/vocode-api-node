/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsVoice: core.serialization.Schema<
    serializers.AgentUpdateParamsVoice.Raw,
    Vocode.AgentUpdateParamsVoice
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("..")).AzureVoiceUpdateParams),
    core.serialization.lazyObject(async () => (await import("..")).RimeVoiceUpdateParams),
    core.serialization.lazyObject(async () => (await import("..")).ElevenLabsVoiceUpdateParams),
    core.serialization.lazyObject(async () => (await import("..")).PlayHtVoiceUpdateParams),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsVoice {
    type Raw =
        | string
        | serializers.AzureVoiceUpdateParams.Raw
        | serializers.RimeVoiceUpdateParams.Raw
        | serializers.ElevenLabsVoiceUpdateParams.Raw
        | serializers.PlayHtVoiceUpdateParams.Raw
        | serializers.Undefined.Raw;
}
