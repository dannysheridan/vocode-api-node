/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const NormalizedPrompt: core.serialization.ObjectSchema<
    serializers.NormalizedPrompt.Raw,
    Vocode.NormalizedPrompt
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    content: core.serialization.string().optional(),
    collectFields: core.serialization.property(
        "collect_fields",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).CollectField)).optional()
    ),
    contextEndpoint: core.serialization.property("context_endpoint", core.serialization.string().optional()),
    promptTemplate: core.serialization.property("prompt_template", core.serialization.string().optional()),
});

export declare namespace NormalizedPrompt {
    interface Raw {
        id: string;
        user_id: string;
        content?: string | null;
        collect_fields?: serializers.CollectField.Raw[] | null;
        context_endpoint?: string | null;
        prompt_template?: string | null;
    }
}
