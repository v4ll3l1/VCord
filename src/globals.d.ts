/*
 * VCord, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

declare global {
    // TODO: try find a way to only need one native thing
    export var VesktopNative: typeof import("preload/VCordNative").VCordNative;
    export var VCordNative: typeof import("preload/VCordNative").VCordNative;
    export var VCord: typeof import("renderer/index");
    export var VCordPatchGlobals: any;

    export var IS_DEV: boolean;
}

export {};
