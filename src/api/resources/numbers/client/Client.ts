/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Vocode from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import { default as URLSearchParams } from "@ungap/url-search-params";

export declare namespace Numbers {
    interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }
}

/**
 * Operations with phone numbers.
 */
export class Numbers {
    constructor(protected readonly _options: Numbers.Options) {}

    public async listNumbers(): Promise<Vocode.PhoneNumber[]> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v1/numbers/list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.5-alpha.2",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.numbers.listNumbers.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VocodeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
    public async getNumber(request: Vocode.GetNumberRequest): Promise<Vocode.PhoneNumber> {
        const { phoneNumber } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("phone_number", phoneNumber);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v1/numbers"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.5-alpha.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PhoneNumber.parseOrThrow(_response.body, {
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

    public async buyNumber(): Promise<Vocode.PhoneNumber> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v1/numbers/buy"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.5-alpha.2",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PhoneNumber.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VocodeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
    public async updateNumber(request: Vocode.UpdateNumberRequest): Promise<Vocode.PhoneNumber> {
        const { phoneNumber, ..._body } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("phone_number", phoneNumber);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v1/numbers/update"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.5-alpha.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.UpdateNumberRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PhoneNumber.parseOrThrow(_response.body, {
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
    public async cancelNumber(request: Vocode.CancelNumberRequest): Promise<Vocode.PhoneNumber> {
        const { phoneNumber } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("phone_number", phoneNumber);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "v1/numbers/cancel"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@vocode/vocode-api",
                "X-Fern-SDK-Version": "0.0.5-alpha.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PhoneNumber.parseOrThrow(_response.body, {
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
