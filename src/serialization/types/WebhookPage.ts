/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const WebhookPage: core.serialization.ObjectSchema<serializers.WebhookPage.Raw, Vocode.WebhookPage> =
    core.serialization.object({
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Webhook)),
        page: core.serialization.number(),
        size: core.serialization.number(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean()),
    });

export declare namespace WebhookPage {
    interface Raw {
        items: serializers.Webhook.Raw[];
        page: number;
        size: number;
        has_more: boolean;
    }
}
