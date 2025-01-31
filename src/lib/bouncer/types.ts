import { CacheConfigurations } from 'src/lib/cache/types';
import { LapiClientConfigurations } from 'src/lib/lapi-client/types';
import { WallsOptions } from 'src/lib/rendered/types';
import { Remediation } from 'src/lib/types';

export type CrowdSecBouncerConfigurations = {
    fallbackRemediation?: Remediation; // fallback in case of unknown remediation
    badIpCacheDuration?: number; // duration in seconds to cache bad IPs
    cleanIpCacheDuration?: number; // duration in seconds to cache clean IPs
    captchaFlowCacheDuration?: number; // duration in seconds to cache captcha flow
    captchaSuccessUrl?: string; // URL to redirect to after successful captcha resolution
    streamMode?: boolean; // stream mode
    wallsOptions?: WallsOptions; // Ban and Captcha walls options
} & LapiClientConfigurations &
    CacheConfigurations;

export type CaptchaSubmission = {
    userPhrase: string;
    ip: string;
    refresh: '0' | '1';
};
