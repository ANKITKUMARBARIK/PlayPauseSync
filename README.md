# YouTube Tab Pause/Play Extension
<br>
A lightweight Chrome extension that automatically pauses YouTube videos when you switch tabs and resumes playback when you return. Perfect for multitaskers who want a seamless YouTube viewing experience!
<br><br>

## Features
<ul style = "list-style-type: disc;">
  <li><b>Automatic Pause :</b> Pauses YouTube videos when you leave the tab.</li>
  <li><b>Automatic Play :</b> Resumes playback when you return to the tab.</li>
  <li><b>No Configuration Needed :</b> Works out of the box with YouTube's default player.</li>
</ul>
<br>

## Installation
### 1. Clone the Repository
Download the source code:
```bash
https://github.com/ANKITKUMARBARIK/PlayPauseSync/archive/refs/heads/main.zip
```

### 2. Load as an Unpacked Extension
1. Open Chrome and navigate to chrome://extensions/.
2. Enable Developer Mode (toggle in the top-right corner).
3. Click Load unpacked and select the folder where you cloned the repository.
<br>

## Usage
1. Open multiple YouTube tabs.
2. Play a video in one tab.
3. Switch to another tab or application — the video will pause automatically.
4. Return to the YouTube tab — playback will resume!
<br>

## File Structure
```bash
youtube-tab-pause-extension/
├── manifest.json      # Extension configuration and permissions
├── background.js      # Handles tab focus detection
├── content.js         # Controls video playback on YouTube
```
<br>

## License
This project is licensed under the MIT License, making it free to use, modify, and distribute.
