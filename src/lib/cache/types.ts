import { CacheAdapter } from 'src/lib/cache/interfaces';
import { CachableOrigin, CachableIdentifier, Remediation, CachableExpiresAt } from 'src/lib/types';

export type CachableDecisionContent = {
    id: CachableIdentifier;
    origin: CachableOrigin;
    expiresAt: CachableExpiresAt;
    value: Remediation;
};

export type OriginCount = {
    origin: CachableOrigin;
    count: number;
};

export type CachableItem<T = unknown> = {
    key: string;
    content: T;
    ttl?: number; // Time to live in milliseconds
};

export type CachableDecisionItem = CachableItem<CachableDecisionContent[]>;

export type CachableOriginsCount = CachableItem<OriginCount[]>;

export type CacheConfigurations = {
    cacheAdapter?: CacheAdapter;
};
