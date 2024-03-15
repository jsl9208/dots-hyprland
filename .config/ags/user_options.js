
const userConfigOptions = {
  // For every option, see ~/.config/ags/modules/.configuration/user_options.js
  // (tip4vscode: `ctrl+click` this: file://./modules/.configuration/user_options.js)
  // (tip4vim: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
  // Options listed in this file will override the default ones in the above file
  // Here's an example
  'apps': {
    'imageViewer': "loupe",
    'terminal': "kitty", // This is only for shell actions
  },
  'time': {
    'dateFormatLong': "%a, %m/%d", // On bar
    'dateFormat': "%m/%d", // On notif time
  },
  'weather': {
    'city': "Shanghai",
  },
  'workspaces': {
    'shown': 8,
  },
}

export default userConfigOptions;
