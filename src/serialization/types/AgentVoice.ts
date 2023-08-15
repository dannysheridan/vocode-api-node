/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentVoice: core.serialization.Schema<serializers.AgentVoice.Raw, Vocode.AgentVoice> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("..")).AzureVoice),
        core.serialization.lazyObject(async () => (await import("..")).RimeVoice),
        core.serialization.lazyObject(async () => (await import("..")).ElevenLabsVoice),
        core.serialization.lazyObject(async () => (await import("..")).PlayHtVoice),
    ]);

export declare namespace AgentVoice {
    type Raw =
        | serializers.AzureVoice.Raw
        | serializers.RimeVoice.Raw
        | serializers.ElevenLabsVoice.Raw
        | serializers.PlayHtVoice.Raw;
}
