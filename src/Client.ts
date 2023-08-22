/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Numbers } from "./api/resources/numbers/client/Client";
import { Calls } from "./api/resources/calls/client/Client";
import { Usage } from "./api/resources/usage/client/Client";
import { Actions } from "./api/resources/actions/client/Client";
import { Agents } from "./api/resources/agents/client/Client";
import { Voices } from "./api/resources/voices/client/Client";
import { Webhooks } from "./api/resources/webhooks/client/Client";

export declare namespace VocodeClient {
    interface Options {
        environment?: core.Supplier<environments.VocodeEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
}

export class VocodeClient {
    constructor(protected readonly _options: VocodeClient.Options) {}

    protected _numbers: Numbers | undefined;

    public get numbers(): Numbers {
        return (this._numbers ??= new Numbers(this._options));
    }

    protected _calls: Calls | undefined;

    public get calls(): Calls {
        return (this._calls ??= new Calls(this._options));
    }

    protected _usage: Usage | undefined;

    public get usage(): Usage {
        return (this._usage ??= new Usage(this._options));
    }

    protected _actions: Actions | undefined;

    public get actions(): Actions {
        return (this._actions ??= new Actions(this._options));
    }

    protected _agents: Agents | undefined;

    public get agents(): Agents {
        return (this._agents ??= new Agents(this._options));
    }

    protected _voices: Voices | undefined;

    public get voices(): Voices {
        return (this._voices ??= new Voices(this._options));
    }

    protected _webhooks: Webhooks | undefined;

    public get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this._options));
    }
}
