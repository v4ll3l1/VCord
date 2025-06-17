/*
 * SPDX-License-Identifier: GPL-3.0
 * VCord, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import "./utils/dotenv";

import { spawnNodeModuleBin } from "./utils/spawn.mjs";

spawnNodeModuleBin("electron", [process.cwd(), ...(process.env.ELECTRON_LAUNCH_FLAGS?.split(" ") ?? [])]);
