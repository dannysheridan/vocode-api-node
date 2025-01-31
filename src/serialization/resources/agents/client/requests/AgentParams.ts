/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vocode from "../../../../../api";
import * as core from "../../../../../core";

export const AgentParams: core.serialization.Schema<serializers.AgentParams.Raw, Vocode.AgentParams> =
    core.serialization.object({
        prompt: core.serialization.lazy(async () => (await import("../../../..")).AgentParamsPrompt),
        language: core.serialization.lazy(async () => (await import("../../../..")).Language).optional(),
        actions: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../..")).AgentParamsActionsItem))
            .optional(),
        voice: core.serialization.lazy(async () => (await import("../../../..")).AgentParamsVoice),
        initialMessage: core.serialization.property("initial_message", core.serialization.string().optional()),
        webhook: core.serialization.lazy(async () => (await import("../../../..")).AgentParamsWebhook).optional(),
        vectorDatabase: core.serialization.property(
            "vector_database",
            core.serialization.lazy(async () => (await import("../../../..")).AgentParamsVectorDatabase).optional()
        ),
        interruptSensitivity: core.serialization.property(
            "interrupt_sensitivity",
            core.serialization.lazy(async () => (await import("../../../..")).InterruptSensitivity).optional()
        ),
        contextEndpoint: core.serialization.property("context_endpoint", core.serialization.string().optional()),
        noiseSuppression: core.serialization.property("noise_suppression", core.serialization.boolean().optional()),
        endpointingSensitivity: core.serialization.property(
            "endpointing_sensitivity",
            core.serialization
                .lazy(async () => (await import("../../../..")).AgentParamsEndpointingSensitivity)
                .optional()
        ),
        ivrNavigationMode: core.serialization.property(
            "ivr_navigation_mode",
            core.serialization.lazy(async () => (await import("../../../..")).AgentParamsIvrNavigationMode).optional()
        ),
        conversationSpeed: core.serialization.property("conversation_speed", core.serialization.number().optional()),
        initialMessageDelay: core.serialization.property(
            "initial_message_delay",
            core.serialization.number().optional()
        ),
    });

export declare namespace AgentParams {
    interface Raw {
        prompt: serializers.AgentParamsPrompt.Raw;
        language?: serializers.Language.Raw | null;
        actions?: serializers.AgentParamsActionsItem.Raw[] | null;
        voice: serializers.AgentParamsVoice.Raw;
        initial_message?: string | null;
        webhook?: serializers.AgentParamsWebhook.Raw | null;
        vector_database?: serializers.AgentParamsVectorDatabase.Raw | null;
        interrupt_sensitivity?: serializers.InterruptSensitivity.Raw | null;
        context_endpoint?: string | null;
        noise_suppression?: boolean | null;
        endpointing_sensitivity?: serializers.AgentParamsEndpointingSensitivity.Raw | null;
        ivr_navigation_mode?: serializers.AgentParamsIvrNavigationMode.Raw | null;
        conversation_speed?: number | null;
        initial_message_delay?: number | null;
    }
}
