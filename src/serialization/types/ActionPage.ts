/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const ActionPage: core.serialization.ObjectSchema<serializers.ActionPage.Raw, Vocode.ActionPage> =
    core.serialization.object({
        items: core.serialization.list(core.serialization.lazy(async () => (await import("..")).ActionPageItemsItem)),
        page: core.serialization.number(),
        size: core.serialization.number(),
        hasMore: core.serialization.property("has_more", core.serialization.boolean()),
    });

export declare namespace ActionPage {
    interface Raw {
        items: serializers.ActionPageItemsItem.Raw[];
        page: number;
        size: number;
        has_more: boolean;
    }
}
