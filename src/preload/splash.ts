/*
 * VCord, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2025 Vendicated and VCord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("VCordSplashNative", {
    onUpdateMessage(callback: (message: string) => void) {
        ipcRenderer.on("update-splash-message", (_, message: string) => callback(message));
    }
});
