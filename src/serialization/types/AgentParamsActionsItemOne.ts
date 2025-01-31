/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const AgentParamsActionsItemOne: core.serialization.Schema<
    serializers.AgentParamsActionsItemOne.Raw,
    Vocode.AgentParamsActionsItemOne
> = core.serialization
    .union("type", {
        action_transfer_call: core.serialization.lazyObject(async () => (await import("..")).TransferCallActionParams),
        action_end_conversation: core.serialization.lazyObject(
            async () => (await import("..")).EndConversationActionParams
        ),
        action_dtmf: core.serialization.lazyObject(async () => (await import("..")).DtmfActionParams),
    })
    .transform<Vocode.AgentParamsActionsItemOne>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AgentParamsActionsItemOne {
    type Raw =
        | AgentParamsActionsItemOne.ActionTransferCall
        | AgentParamsActionsItemOne.ActionEndConversation
        | AgentParamsActionsItemOne.ActionDtmf;

    interface ActionTransferCall extends serializers.TransferCallActionParams.Raw {
        type: "action_transfer_call";
    }

    interface ActionEndConversation extends serializers.EndConversationActionParams.Raw {
        type: "action_end_conversation";
    }

    interface ActionDtmf extends serializers.DtmfActionParams.Raw {
        type: "action_dtmf";
    }
}
