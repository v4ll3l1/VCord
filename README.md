# VCord

VCord is a custom Discord desktop app

**Main features**:
- Vencord preinstalled
- Much more lightweight and faster than the official Discord app
- Linux Screenshare with sound & wayland
- Much better privacy, since Discord has no access to your system

**Not yet supported**:
- Global Keybinds
- see the [Roadmap](https://github.com/Vencord/VCord/issues/324)

![](https://github.com/Vencord/VCord/assets/45497981/8608a899-96a9-4027-9725-2cb02ba189fd)
![](https://github.com/Vencord/VCord/assets/45497981/8701e5de-52c4-4346-a990-719cb971642e)

## Installing

### Windows

If you don't know the difference, pick the Installer.

- [Installer](https://vencord.dev/download/vcord/universal/windows)
- Portable:
  - [x64 / amd64](https://vencord.dev/download/vcord/amd64/windows-portable)
  - [Arm® 64](https://vencord.dev/download/vcord/arm64/windows-portable)

### Mac

Download the latest [VCord.dmg](https://vencord.dev/download/vcord/universal/dmg) or use [Homebrew](https://brew.sh/)

```sh
brew install vcord
```

### Linux

[![Download on Flathub](https://dl.flathub.org/assets/badges/flathub-badge-en.svg)](https://flathub.org/apps/dev.vencord.VCord)

If you don't know the difference, pick amd64.

- amd64 / x86_64
  - [AppImage](https://vencord.dev/download/vcord/amd64/appimage)
  - [Ubuntu/Debian (.deb)](https://vencord.dev/download/vcord/amd64/deb)
  - [Fedora/RHEL (.rpm)](https://vencord.dev/download/vcord/amd64/rpm)
  - [tarball](https://vencord.dev/download/vcord/amd64/tar)
- Arm® 64 / aarch64
  - [AppImage](https://vencord.dev/download/vcord/arm64/appimage)
  - [Ubuntu/Debian (.deb)](https://vencord.dev/download/vcord/arm64/deb)
  - [Fedora/RHEL (.rpm)](https://vencord.dev/download/vcord/arm64/rpm)
  - [tarball](https://vencord.dev/download/vcord/arm64/tar)

#### Community packages

Below you can find unofficial packages created by the community. They are not officially supported by us, so before reporting issues, please first confirm the issue also happens on official builds. When in doubt, consult with their packager first. The flatpak and AppImage should work on any distro that [supports them](https://flatpak.org/setup/), so I recommend you just use those instead!

- Arch Linux: [VCord on the Arch user repository](https://aur.archlinux.org/packages?K=vcord)
- NixOS: https://wiki.nixos.org/wiki/Discord#VCord
- Slackware: [VCord on the SlackBuilds](https://slackbuilds.org/result/?search=vcord)
- Windows - Scoop: https://scoop.sh/#/apps?q=VCord

## Building from Source

You need to have the following dependencies installed:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)
- pnpm: `npm install --global pnpm`

Packaging will create builds in the dist/ folder

```sh
git clone https://github.com/Vencord/VCord
cd VCord

# Install Dependencies
pnpm i

# Either run it without packaging
pnpm start

# Or package (will build packages for your OS)
pnpm package

# Or only build the Linux Pacman package
pnpm package --linux pacman

# Or package to a directory only
pnpm package:dir
```
