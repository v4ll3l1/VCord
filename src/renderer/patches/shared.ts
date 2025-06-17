/*
 * VCord, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Patch } from "@vencord/types/utils/types";

window.VCordPatchGlobals = {};

interface PatchData {
    patches: Omit<Patch, "plugin">[];
    [key: string]: any;
}

export function addPatch<P extends PatchData>(p: P) {
    const { patches, ...globals } = p;

    for (const patch of patches) {
        Vencord.Plugins.addPatch(patch, "VCord", "VCordPatchGlobals");
    }

    Object.assign(VCordPatchGlobals, globals);
}
