/// <reference path="../../../typings/react-cache.d.ts" />
declare type PreloadProps = {
    href: string;
    as: string;
    media?: string;
};
export declare const PreloadResource: import("react-cache").Resource<PreloadProps, {}>;
export declare const Preload: React.FC<PreloadProps>;
export {};
