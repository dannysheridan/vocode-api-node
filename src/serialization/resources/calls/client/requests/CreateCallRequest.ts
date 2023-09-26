/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vocode from "../../../../../api";
import * as core from "../../../../../core";

export const CreateCallRequest: core.serialization.Schema<serializers.CreateCallRequest.Raw, Vocode.CreateCallRequest> =
    core.serialization.object({
        fromNumber: core.serialization.property("from_number", core.serialization.string()),
        toNumber: core.serialization.property("to_number", core.serialization.string()),
        agent: core.serialization.lazy(async () => (await import("../../../..")).CreateCallRequestAgent),
        onMachineAnswer: core.serialization.property(
            "on_machine_answer",
            core.serialization
                .lazy(async () => (await import("../../../..")).CreateCallRequestOnMachineAnswer)
                .optional()
        ),
        hipaaCompliant: core.serialization.property("hipaa_compliant", core.serialization.boolean().optional()),
        context: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    });

export declare namespace CreateCallRequest {
    interface Raw {
        from_number: string;
        to_number: string;
        agent: serializers.CreateCallRequestAgent.Raw;
        on_machine_answer?: serializers.CreateCallRequestOnMachineAnswer.Raw | null;
        hipaa_compliant?: boolean | null;
        context?: Record<string, string> | null;
    }
}
