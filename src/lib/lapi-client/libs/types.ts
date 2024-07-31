import { DecisionOrigin, DecisionScope } from 'src/lib/types';

export type LapiClientConfigurations = {
    url: string;
    bouncerApiToken: string;
    userAgent?: string;
    timeout?: number;
};

export type GetDecisionsOptions = {
    isFirstFetch?: boolean;
    origins?: DecisionOrigin[];
    scopes?: DecisionScope[];
    scenariosContaining?: string[];
    scenariosNotContaining?: string[];
};
