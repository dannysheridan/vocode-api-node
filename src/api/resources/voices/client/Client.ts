/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vocode from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Voices {
    interface Options {
        environment?: core.Supplier<environments.VocodeEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Voices {
    constructor(protected readonly _options: Voices.Options) {}

    /**
     * @throws {@link Vocode.UnprocessableEntityError}
     */
    public async getVoice(request: Vocode.GetVoiceRequest): Promise<Vocode.VoiceResponseModel> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VocodeEnvironment.Production,
                "v1/voices"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.27",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.VoiceResponseModel.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vocode.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VocodeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VocodeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VocodeTimeoutError();
            case "unknown":
                throw new errors.VocodeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Vocode.UnprocessableEntityError}
     */
    public async listVoices(request: Vocode.ListVoicesRequest = {}): Promise<Vocode.VoicePage> {
        const { page, size } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (size != null) {
            _queryParams.append("size", size.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VocodeEnvironment.Production,
                "v1/voices/list"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.27",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.VoicePage.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vocode.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VocodeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VocodeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VocodeTimeoutError();
            case "unknown":
                throw new errors.VocodeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Vocode.UnprocessableEntityError}
     */
    public async createVoice(request: Vocode.VoiceParamsRequest): Promise<Vocode.VoiceResponseModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VocodeEnvironment.Production,
                "v1/voices/create"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.27",
            },
            contentType: "application/json",
            body: await serializers.VoiceParamsRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.VoiceResponseModel.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vocode.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VocodeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VocodeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VocodeTimeoutError();
            case "unknown":
                throw new errors.VocodeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Vocode.UnprocessableEntityError}
     */
    public async updateVoice(request: Vocode.UpdateVoiceRequest): Promise<Vocode.VoiceResponseModel> {
        const { id, body: _body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VocodeEnvironment.Production,
                "v1/voices/update"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.27",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.VoiceUpdateParamsRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.VoiceResponseModel.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vocode.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VocodeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VocodeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VocodeTimeoutError();
            case "unknown":
                throw new errors.VocodeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
