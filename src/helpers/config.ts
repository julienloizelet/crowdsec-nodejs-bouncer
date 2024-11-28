import { CrowdSecBouncerConfigurations } from 'src/lib/bouncer/libs/types';

export const getConfig = <T extends keyof CrowdSecBouncerConfigurations>(
    key: T,
    configs: CrowdSecBouncerConfigurations,
): CrowdSecBouncerConfigurations[T] | null => {
    return configs[key] ?? null;
};
