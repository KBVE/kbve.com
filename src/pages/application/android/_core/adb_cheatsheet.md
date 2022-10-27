---
title: ADB Cheatsheet
---

## ADB Cheatsheet

### Device Commands

- `adb devices` - List all connected devices.
  - `adb devices -l` - Query additional information from devices.
  - `adb get-state` - Information on the device state.
  - `adb get-serialno` - Query the device serial number.
- `adb root` - Launch module adbd with root permission.
  - Error 1: `adbd cannot run as root in production builds`
    - Resolution:
- `adb start-server` - Start the adb server.
- `adb kill-server` - Terminate the adb server.
- `adb reboot` - Restart the current device.
- `adb help` - Display additional information.

### Shell

- `adb shell` - Launch the shell terminal for the device.
- `adb -s $deviceString $deviceCommand` - Send the $deviceCommand to a specific device named $deviceString
- `adb shell pwd` - Command to list current directory.
- `adb shell ls` - Command to list all the directory contents of the device.
  - `adb shell ls -s` - Additional size information.
  - `adb shell ls -R` - Recursion of the folders.
- `adb shell netstat` - Query the TCP information
- `adb shell dumpsys` - An android tool that dumps information related to system services.
  - `adb shell dumpsys iphonesybinfo` - Query the IMEI information.
  - `adb shell dumpsys battery` - Query battery information.
    - `adb shell dumpsys battery set level $v` - Device battery level from 0 to 100.
    - `adb shell dumpsys battery reset` - Reset the device battery.
  - `adb shell dumpsys activity $package` - Query activity of package.
- `adb shell pm list features` - Query device features.
- `adb shell service list` - Query device services.
- `adb shell wm` - ◈Null
  - `adb shell wm size` - Current device screen resolution.
    - `adb shell wm size $WxH` - Change device screen resolution.
    - `adb shell wm size reset` - Reset device screen resolution.
  - `adb shell wm density` - ◈Null
    - `adb shell wm density reset` - Reset device density.
- `adb shell ps` - Query process status on the device.

### Key Events

- Koltin: `open class KeyEvent: InputEvent, Parcelable`
- Java: `pulibc class KeyEvent extends InputEvent implements Parcelable`
- Android Key Events - A quick breakdown for each event and how the operating system handles them.
- `adb shell input keyevent`
  - `adb shell input keyevent 0` - ◈Keycode 0
  - `adb shell input keyevent 1` - Soft Left
  - `adb shell input keyevent 2` - Soft Right
  - `adb shell input keyevent 3` - Home Button Event.
  - `adb shell input keyevent 4` - Back Button Event.
  - `adb shell input keyevent 5` - Call Event.
  - `adb shell input keyevent 6` - End Call / Hangup Event.
  - Events 7 to 18 are generic cell phone events.
    - `adb shell input keyevent 7` - Keycode 0
    - `adb shell input keyevent 8` - Keycode 1 aka Number 1
    - `adb shell input keyevent 9` - Keycode 2 aka Number 2
    - `adb shell input keyevent 10` - Keycode 3 aka Number 3
    - `adb shell input keyevent 11` - Keycode 4 aka Number 4
    - `adb shell input keyevent 12` - Keycode 5 aka Number 5
    - `adb shell input keyevent 13` - Keycode 6 aka Number 6
    - `adb shell input keyevent 14` - Keycode 7 aka Number 7
    - `adb shell input keyevent 15` - Keycode 8 aka Number 8
    - `adb shell input keyevent 16` - Keycode 9 aka Number 9
    - `adb shell input keyevent 17` - STAR Key
    - `adb shell input keyevent 18` - Pound Key
