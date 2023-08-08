/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentUpdateParamsLanguage: core.serialization.Schema<
    serializers.AgentUpdateParamsLanguage.Raw,
    Vocode.AgentUpdateParamsLanguage
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("..")).Language),
    core.serialization.lazyObject(async () => (await import("..")).Undefined),
]);

export declare namespace AgentUpdateParamsLanguage {
    type Raw = serializers.Language.Raw | serializers.Undefined.Raw;
}
