/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vocode from "../../api";
import * as core from "../../core";

export const Language: core.serialization.Schema<serializers.Language.Raw, Vocode.Language> = core.serialization.enum_([
    "en",
    "es",
    "de",
]);

export declare namespace Language {
    type Raw = "en" | "es" | "de";
}
