/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ActionUpdateParamsRequest: core.serialization.Schema<
    serializers.ActionUpdateParamsRequest.Raw,
    Vocode.ActionUpdateParamsRequest
> = core.serialization
    .union("type", {
        action_transfer_call: core.serialization.lazyObject(
            async () => (await import("..")).TransferCallActionUpdateParams
        ),
        action_end_conversation: core.serialization.lazyObject(
            async () => (await import("..")).EndConversationActionUpdateParams
        ),
        action_dtmf: core.serialization.lazyObject(async () => (await import("..")).DtmfActionUpdateParams),
    })
    .transform<Vocode.ActionUpdateParamsRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ActionUpdateParamsRequest {
    type Raw =
        | ActionUpdateParamsRequest.ActionTransferCall
        | ActionUpdateParamsRequest.ActionEndConversation
        | ActionUpdateParamsRequest.ActionDtmf;

    interface ActionTransferCall extends serializers.TransferCallActionUpdateParams.Raw {
        type: "action_transfer_call";
    }

    interface ActionEndConversation extends serializers.EndConversationActionUpdateParams.Raw {
        type: "action_end_conversation";
    }

    interface ActionDtmf extends serializers.DtmfActionUpdateParams.Raw {
        type: "action_dtmf";
    }
}
