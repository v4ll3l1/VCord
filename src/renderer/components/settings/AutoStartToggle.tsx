/*
 * VCord, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { useState } from "@vencord/types/webpack/common";

import { SettingsComponent } from "./Settings";
import { VCordSettingsSwitch } from "./VCordSettingsSwitch";

export const AutoStartToggle: SettingsComponent = () => {
    const [autoStartEnabled, setAutoStartEnabled] = useState(VCordNative.autostart.isEnabled());

    return (
        <VCordSettingsSwitch
            value={autoStartEnabled}
            onChange={async v => {
                await VCordNative.autostart[v ? "enable" : "disable"]();
                setAutoStartEnabled(v);
            }}
            note="Automatically start VCord on computer start-up"
        >
            Start With System
        </VCordSettingsSwitch>
    );
};
