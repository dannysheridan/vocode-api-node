/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const Call: core.serialization.ObjectSchema<serializers.Call.Raw, Vocode.Call> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    toNumber: core.serialization.property("to_number", core.serialization.string()),
    fromNumber: core.serialization.property("from_number", core.serialization.string()),
    agent: core.serialization.lazy(async () => (await import("..")).CallAgent),
    goal: core.serialization.string().optional(),
    transcript: core.serialization.string().optional(),
    recordingUrl: core.serialization.property("recording_url", core.serialization.string().optional()),
    status: core.serialization.lazy(async () => (await import("..")).CallStatus),
    errorMessage: core.serialization.property("error_message", core.serialization.string().optional()),
    recordingAvailable: core.serialization.property("recording_available", core.serialization.boolean().optional()),
});

export declare namespace Call {
    interface Raw {
        id: string;
        user_id: string;
        to_number: string;
        from_number: string;
        agent: serializers.CallAgent.Raw;
        goal?: string | null;
        transcript?: string | null;
        recording_url?: string | null;
        status: serializers.CallStatus.Raw;
        error_message?: string | null;
        recording_available?: boolean | null;
    }
}
